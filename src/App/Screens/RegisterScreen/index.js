import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, AsyncStorage, Platform } from 'react-native';
import CModal from '../../Global/Components/CModal';
import { postRegister } from '../../Global/Helper/Action';
import { Toast } from '../../Global/Helper/Function';
import { styles } from './style';
import { iconSuccess, iconFailed } from '../../Assets/Shared'
import CButton from '../../Global/Components/CButton';
import CText from '../../Global/Components/CText';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // userAccount: {
      //   username: false,
      //   email: false,
      //   phoneNumber: false,
      //   password: false,
      //   passwordConfirmation: false,
      // },
      userAccount: {
        username: 'test1',
        email: 'test1@getnada.com',
        phoneNumber: '081210197875',
        password: '123123@',
        passwordConfirmation: '123123@',
      },
      isLoading: false,
      isLoadingPopUp: false,
      popUp: {
        visible: false,
        title: false,
        description: false,
        labelAccept: false,
        onPressAccept: false
      }
    };
  }

  setItem = async (newData) => {
    await AsyncStorage.setItem('user', JSON.stringify(newData));
  }
  // getItem = async () => {
  //   const result = await AsyncStorage.getItem('user');
  //   return JSON.parse(result);
  // }

  _handlerOnPressAccept = (isSuccess = false) => {
    this.setState({ isLoadingPopUp: true })
    const { navigation } = this.props;
    const { email } = this.state?.userAccount;

    try {
      setTimeout(() => {
        if (isSuccess) {
          navigation.navigate('VerifyOTPScreen', { email: email })
          this.setState({
            popUp: {
              visible: false
            },
            userAccount: {
              username: false,
              email: false,
              phoneNumber: false,
              password: false,
              passwordConfirmation: false,
            },
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

  _handlerPopUp = (isSuccess = false, data) => {
    this.setState({ isLoadingPopUp: true });
    const { system, user } = data?.status?.messages;
    const { username, email, password } = user;

    // console.log(console.log("_handlerPopUp@result =====================>", JSON.stringify(data, null, 2)));
    // console.log(console.log("_handlerPopUp@isSuccess =====================>", JSON.stringify(isSuccess, null, 2)));

    const Title = system;
    const invalidUsername = username ? `${username[0]} \n` : '';
    const invalidEmail = email ? `${email[0]} \n` : '';
    const invalidPassword = password ? `${password[0]}` : '';
    const Description = (isSuccess ? user : `${invalidUsername} ${invalidEmail} ${invalidPassword}`);

    setTimeout(() => {
      this.setState({
        popUp: {
          icon: isSuccess ? iconSuccess : iconFailed,
          visible: true,
          title: Title,
          description: Description,
          labelAccept: 'Understand',
          onPressAccept: () => { this._handlerOnPressAccept(isSuccess) }
        },
        isLoadingPopUp: false,
      });
    }, 1500);
  }

  _handlerRegister = async () => {
    this.setState({ isLoading: true });
    const { userAccount } = this.state;
    const { username, email, phoneNumber, password, passwordConfirmation } = userAccount;
    const registerParams = (username && email && phoneNumber && password && passwordConfirmation);


    if (registerParams) {
      try {
        const result = await postRegister(username, email, phoneNumber, password, passwordConfirmation);
        const data = result.data;
        const { http_status_code } = data?.meta;
        const codeValid = (http_status_code === 200);
        // console.log("result =====================>", JSON.stringify(data, null, 2));

        if (data) {
          this._handlerPopUp(codeValid ? true : false, data);
        }

      } catch (error) {
        console.log("ResgisterScreen.js@_handlerRegister ==>", error, null, 2);
      } finally {
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 1500);
      }



      // const oldData = await AsyncStorage.getItem('user');

      // if (oldData === null) {
      //   this.setItem(newData);
      //   this._handlerStateAfterRegist();
      // }



      // else {

      // stack.push(JSON.parse(oldData));
      // stack.push(newData);
      // this.setItem(stack);
      // this._handlerStateAfterRegist();
      // }
    } else {
      setTimeout(() => {
        this._handlerValidateInput();
        this.setState({ isLoading: false });
      }, 1500);
    }
  }

  _getData = async () => {
    const getData = await AsyncStorage.getItem('user');
    // const getDataParse = JSON.parse(getData);
    // console.log('_getData >>', getData);

    // AsyncStorage.clear();
  }

  _handlerValidateInput = () => {
    const { username, email, phoneNumber, password, passwordConfirmation } = this.state.userAccount;

    if (!username) {
      Toast("Please complete your username.");
    } else if (!email) {
      Toast("Please complete your email address.");
    } else if (!phoneNumber) {
      Toast("Please complete your telephone number.");
    } else if (!password) {
      Toast("Please complete your password.");
    } else if (!passwordConfirmation) {
      Toast("Please confirm your password.");
    }

    return false;
  }

  render() {
    const { navigation } = this.props;
    const { userAccount, popUp, isLoading, isLoadingPopUp } = this.state;
    const { username, email, phoneNumber, password, passwordConfirmation } = userAccount;
    const { visible, icon, title, description, labelAccept, onPressAccept } = popUp;

    const keyboardType = Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password';
    // console.log('userAccount', this.state.userAccount);
    // this._getData();

    return (
      <View style={styles.container} >
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={keyboardType}
          value={username}
          onChangeText={(usernameValue) =>
            this.setState({
              userAccount: {
                username: usernameValue.trim(),
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                passwordConfirmation: passwordConfirmation,
              }
            })
          }
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType={keyboardType}
          value={email}
          onChangeText={(emailValue) =>
            this.setState({
              userAccount: {
                username: username,
                email: emailValue.trim(),
                phoneNumber: phoneNumber,
                password: password,
                passwordConfirmation: passwordConfirmation,
              }
            })
          }
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Phone number"
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="number-pad"
          value={phoneNumber}
          onChangeText={(phoneNumberValue) =>
            this.setState({
              userAccount: {
                username: username,
                email: email,
                phoneNumber: phoneNumberValue.trim().replace(/[^0-9]/g, ''),
                password: password,
                passwordConfirmation: passwordConfirmation,
              }
            })
          }
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          value={password}
          onChangeText={(passwordValue) =>
            this.setState({
              userAccount: {
                username: username,
                email: email,
                phoneNumber: phoneNumber,
                password: passwordValue.trim(),
                passwordConfirmation: passwordConfirmation,
              }
            })
          }
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Retype password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          value={passwordConfirmation}
          onChangeText={(passwordConfirmationValue) =>
            this.setState({
              userAccount: {
                username: username,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                passwordConfirmation: passwordConfirmationValue.trim(),
              }
            })
          }
        />

        <CButton
          loading={isLoading}
          style={styles.button}
          onPress={() => this._handlerRegister()}
          label={'Register'}
        />

        <View style={{ flexDirection: 'row' }}>
          <CText
            style={styles.signupText}
            children={'Already have an account? '}
          />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.signupButton}>{'Sign In'}</Text>
          </TouchableOpacity>
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
