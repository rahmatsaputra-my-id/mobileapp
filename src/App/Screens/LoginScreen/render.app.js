import React, { Component } from 'react';
import { View, TextInput, AsyncStorage, Image, Text, TouchableOpacity } from 'react-native';
import CButton from '../../Global/Components/CButton';
import { styles } from './styles';
import { iconWelcome, iconFailed } from '../../Assets/Shared'
import { Toast } from '../../Global/Helper/Function';
import { postLogin } from '../../Global/Helper/Action';
import CModal from '../../Global/Components/CModal';

import { connect } from 'react-redux';
import { SET_ACCESS_TOKEN_APP } from './reducer';

export default class RenderApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // userAccount: {
      //   email: false,
      //   password: false
      // },
      userAccount: {
        email: 'testteo@getnada.com',
        password: '123123@'
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

  _handlerValidateInput = () => {
    const { userAccount } = this.state;
    const { email, password } = userAccount;

    if (!email) {
      Toast("Please complete your email address.");
    } else if (!password) {
      Toast("Please complete your password.");
    }
    return false;
  }

  _handlerOnPressAccept = () => {
    this.setState({ isLoadingPopUp: true })
    const { navigation } = this.props;
    const { email } = this.state?.userAccount;

    try {
      setTimeout(() => {
        this.setState({
          popUp: {
            visible: false
          },
          userAccount: {
            email: false,
            password: false
          },
        });
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
    const { navigation, setAccessToken } = this.props;
    setTimeout(() => {
      if (isSuccess) {
        setAccessToken(data.token.access);
        navigation.navigate('BottomTab');
        this.setState({
          userAccount: {
            email: false,
            password: false
          },
          isLoadingPopUp: false,
        });
      } else {
        this.setState({
          popUp: {
            icon: iconFailed,
            visible: true,
            title: system,
            description: user,
            labelAccept: 'Understand',
            onPressAccept: () => { this._handlerOnPressAccept() }
          },
          isLoadingPopUp: false,
        });
      }
    }, 1500);
  }

  _handlerLogin = async () => {
    this.setState({ isLoading: true });
    const { email, password } = this.state.userAccount;
    const loginParams = email && password;

    if (loginParams) {
      try {
        const result = await postLogin(email, password);
        const data = result.data;
        const { http_status_code } = data?.meta;
        const codeValid = (http_status_code === 200);

        if (data) {
          this._handlerPopUp(codeValid ? true : false, data);
        }

      } catch (error) {
        console.log("LoginScreen.js@_handlerLogin ==>", error, null, 2);
      } finally {
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 1500);
      }

    } else {
      setTimeout(() => {
        this._handlerValidateInput();
        this.setState({ isLoading: false });
      }, 1500);
    }
  }


  render() {
    const { navigation } = this.props;
    const { userAccount, popUp, isLoading, isLoadingPopUp } = this.state;
    const { email, password } = userAccount;
    const { visible, icon, title, description, labelAccept, onPressAccept } = popUp;
    const keyboardType = Platform.OS === 'ios' ? 'ascii-capable' : 'visible-password';

    return (
      <View style={styles.container} >
        <Image
          style={styles.iconWelcome}
          source={iconWelcome}
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
                email: emailValue.trim(),
                password: password
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
                email: email,
                password: passwordValue.trim()
              }
            })
          }
        />

        <CButton
          loading={isLoading}
          style={styles.button}
          onPress={() => this._handlerLogin()}
          label={'Login'}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.signupQuestion}>{`Have'nt an account? `}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.signupAnswer}>{'Sign Up'}</Text>
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

