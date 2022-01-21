import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import CButton from '../../Global/Components/CButton';
import { styles } from './style';
import { Toast } from '../../Global/Helper/Function';
import { Colors } from '../../Global/Components/CThemes';
import { postCodeVerification, postResendCodeVerification } from '../../Global/Helper/Action';
import { iconSuccess, iconFailed } from '../../Assets/Shared'
import CModal from '../../Global/Components/CModal';

export default class VerifyOTPScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAccount: {
        otpCode: false
      },
      popUp: {
        visible: false,
        title: false,
        description: false,
        labelAccept: false,
        onPressAccept: false
      },
      isLoading: false,
      isLoadingPopUp: false,
      isLoadingResendCode: false
    };
  }

  _handlerOnPressAccept = (isSuccess, resendCode) => {
    this.setState({ isLoadingPopUp: true })
    const { navigation } = this.props;

    try {
      setTimeout(() => {
        if (isSuccess) {
          !resendCode && navigation.navigate('LoginScreen');
          this.setState({
            popUp: {
              visible: false
            },
            userAccount: {
              otpCode: false
            }
          })
        } else {
          this.setState({ popUp: { visible: false } })
        }
      }, 1500);
    } catch (error) {
      return error;
    } finally {
      setTimeout(() => {
        this.setState({ isLoadingPopUp: false })
      }, 1500);
    }
  }

  _handlerValidateInput = () => {
    const { userAccount } = this.state;
    const { otpCode } = userAccount;

    !otpCode && Toast("Please complete your verification code.");
    return false;
  }

  _handlerPopUp = (isSuccess, resendCode, data) => {
    this.setState({ isLoadingPopUp: true });
    const { system, user } = data?.status?.messages;

    setTimeout(() => {
      this.setState({
        popUp: {
          icon: isSuccess ? iconSuccess : iconFailed,
          visible: true,
          title: system,
          description: user,
          labelAccept: 'Understand',
          onPressAccept: () => { this._handlerOnPressAccept(isSuccess, resendCode) }
        },
        isLoadingPopUp: false,
      });
    }, 1500);
  }

  _handlerVerify = async (resendCode = false) => {
    resendCode
      ? this.setState({ isLoadingResendCode: true })
      : this.setState({ isLoading: true });
    const { route } = this.props;
    const { userAccount } = this.state;
    const { otpCode } = userAccount;
    const { email } = route.params;

    if (otpCode || resendCode) {
      try {
        const result = resendCode
          ? await postResendCodeVerification(email)
          : await postCodeVerification(email, otpCode);

        const data = result.data;
        const { http_status_code } = data?.meta;
        const codeValid = (http_status_code === 200);

        if (data) {
          this._handlerPopUp(codeValid ? true : false, resendCode, data);
        }

      } catch (error) {
        console.log("VerifyOTPScreen.js@_handlerVerify ==>", error, null, 2);
      } finally {
        setTimeout(() => {
          this.setState({ isLoading: false, isLoadingResendCode: false })
        }, 1500);
      }

    } else {
      setTimeout(() => {
        this._handlerValidateInput();
        this.setState({ isLoading: false, isLoadingResendCode: false })
      }, 1500);
    }
  }


  render() {
    const { navigation, route } = this.props;
    const { email } = route.params;
    const { userAccount, popUp, isLoading, isLoadingPopUp, isLoadingResendCode } = this.state;
    const { visible, icon, title, description, labelAccept, onPressAccept } = popUp;
    const { otpCode } = userAccount;

    return (
      <View style={styles.container}>
        <Text style={styles.greetingsTitle}>
          {`Please check the email we have sent to ${email} to see the verification code.`}
        </Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Type your verification code"
          placeholderTextColor={Colors.white}
          keyboardType="number-pad"
          value={otpCode}
          maxLength={6}
          onChangeText={(codeNumber) =>
            this.setState({
              userAccount: {
                otpCode: codeNumber.trim().replace(/[^0-9]/g, '')
              }
            })
          }
        />

        <CButton
          loading={isLoading}
          style={styles.button}
          onPress={() => this._handlerVerify()}
          label={'Confirmation'}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.resendCodeQuestion}>{`Did'nt get verify code?`}</Text>
          {
            isLoadingResendCode
              ? <ActivityIndicator color={Colors.white} />
              : <TouchableOpacity onPress={() => this._handlerVerify(true)}>
                <Text style={styles.resendCodeAnswer}>{'Resend code'}</Text>
              </TouchableOpacity>
          }
        </View>

        <CModal
          loading={isLoadingPopUp}
          visible={visible}
          icon={icon}
          title={title}
          description={description}
          labelAccept={labelAccept}
          onPressAccept={onPressAccept}
        />
      </View>
    );
  }
}
