import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { iconRahmatSaputra } from '../../Assets/Shared';
import { connect } from 'react-redux';
import { getUser, postLogout } from '../../Global/Helper/Action';
import CModal from '../../Global/Components/CModal';
import CButton from '../../Global/Components/CButton';
import { openUrl } from '../../Global/Helper/Function';

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popUp: {
        visible: false,
        title: false,
        description: false,
        labelAccept: false,
        labelCancel: false,
        onPressAccept: false,
        onPressCancel: false
      },
      isLoadingLogout: false,
      isLoadingPopUp: false,
      user: {
        username: false,
        email: false,
        phoneNumber: false
      }
    }
  }

  componentDidMount() {
    this._handlerGetUser();
  }

  _handlerOnPressAccept = (isSuccess = false) => {
    this.setState({ isLoadingPopUp: true });
    const { navigation } = this.props;

    try {
      if (isSuccess) {
        navigation.navigate('LoginScreen');
        this.setState({
          popUp: {
            visible: false
          }
        })
      } else {
        this.setState({ popUp: { visible: false } });
      }
    } catch (error) {
      return error;
    } finally {
      setTimeout(() => {
        this.setState({ isLoadingPopUp: false });
      }, 1500);
    }
  }

  _handlerPopUp = (isConfirm = false, isSuccess = false, data = false) => {
    this.setState({ isLoadingPopUp: true, isLoadingLogout: isConfirm && true });

    if (isConfirm) {
      setTimeout(() => {
        this.setState({
          popUp: {
            visible: true,
            title: 'Logout',
            description: 'Are you sure you want to logout?',
            labelAccept: 'Continue',
            labelCancel: 'Cancel',
            onPressAccept: () => { this._handlerLogout(); },
            onPressCancel: () => { this.setState({ popUp: { visible: false } }); }
          },
          isLoadingLogout: false,
          isLoadingPopUp: false,
        });
      }, 1500);
    } else {
      setTimeout(() => {
        this.setState({
          isLoadingPopUp: false,
        });
        this._handlerOnPressAccept(isSuccess)
      }, 1500);

    }
  }

  _handlerLogout = async () => {
    const { accessToken } = this.props;
    this.setState({ isLoadingPopUp: true })

    try {
      const result = await postLogout(accessToken);
      const data = result.data;
      const { http_status_code } = data?.meta;
      const codeValid = (http_status_code === 200);

      if (data) {
        this._handlerPopUp(false, codeValid ? true : false, data);
      }

    } catch (error) {
      console.log("ProfileScreen.js@_handlerLogout ==>", error, null, 2);
      return error;
    } finally {
      setTimeout(() => {
        this.setState({ isLoadingPopUp: false })
      }, 1500);
    }
  }

  _handlerGetUser = async () => {
    const { accessToken } = this.props;
    try {
      const result = await getUser(accessToken);
      const data = result.data;
      const { http_status_code } = data?.meta;
      const codeValid = (http_status_code === 200);
      const { username, email, phone } = data.user;

      if (data && codeValid) {
        this.setState({
          user: {
            username: username,
            email: email,
            phoneNumber: phone
          }
        })
      }

    } catch (error) {
      return error;
    }
  }

  render() {
    const { popUp, isLoadingLogout, isLoadingPopUp, user } = this.state;
    const { username, email, phoneNumber } = user;
    console.log('username', username);
    const {
      visible,
      icon,
      title,
      description,
      labelAccept,
      labelCancel,
      onPressAccept,
      onPressCancel
    } = popUp;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            <View style={styles.headerContainer}>
              <ImageBackground
                style={styles.headerBackgroundImage}
                blurRadius={10}
                backgroundColor="#363f50">
                <View style={styles.headerColumn}>
                  <Image
                    style={styles.userImage}
                    source={iconRahmatSaputra}
                  />
                  <Text style={styles.userNameText}>
                    {username}
                  </Text>
                </View>
              </ImageBackground>
            </View>

            {/* telpon */}
            <TouchableOpacity onPress={() => openUrl('mailto:rahmatsaputra.my.id@gmail.com')}>
              <View style={styles.telContainer}>
                <View style={styles.telIconRow}>
                  <Icon
                    name="email"
                    underlayColor="transparent"
                    iconStyle={styles.telIcon}
                  />
                </View>
                <View style={styles.telRow}>
                  <View style={styles.telNumberColumn}>
                    <Text style={styles.telNumberText}>
                      {email}
                    </Text>
                  </View>
                  <View style={styles.telNameColumn}>
                    <Text style={styles.telNameText}>{"Email"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Separator */}
            <View style={styles.separatorContainer}>
              <View style={styles.separatorOffset} />
              <View style={styles.separator} />
            </View>

            <TouchableOpacity onPress={() => openUrl('https://wa.me/6281210197870')}>
              <View style={styles.telContainer}>
                <View style={styles.telIconRow}>
                  <Icon
                    name="call"
                    underlayColor="transparent"
                    iconStyle={styles.telIcon}
                  />
                </View>
                <View style={styles.telRow}>
                  <View style={styles.telNumberColumn}>
                    <Text style={styles.telNumberText}>
                      {phoneNumber}
                    </Text>
                  </View>
                  <View style={styles.telNameColumn}>
                    <Text style={styles.telNameText}>
                      {'Phone'}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* <View style={styles.separatorContainer}>
              <View style={styles.separatorOffset} />
              <View style={styles.separator} />
            </View> */}

            <View style={styles.buttonContainer}>
              <CButton
                loading={isLoadingLogout}
                label={'LOGOUT'}
                onPress={() => this._handlerPopUp(true, false, false)}
              />
            </View>

            {/* <TouchableOpacity onPress={() => this._handlerLogout()}>
              <View style={{ ...styles.telContainer, justifyContent: 'center' }}>
                <Text style={styles.telNumberText}>
                  {'LOGOUT'}
                </Text>
              </View>
            </TouchableOpacity> */}
          </Card>
        </View>

        <CModal
          loading={isLoadingPopUp}
          visible={visible}
          icon={icon}
          title={title}
          description={description}
          labelAccept={labelAccept}
          labelCancel={labelCancel}
          onPressAccept={onPressAccept}
          onPressCancel={onPressCancel}
        />
      </ScrollView >
    );
  }
}

const mapStateToProps = (state) => {
  const { accessToken } = state;

  return { accessToken };
}

export default connect(mapStateToProps)(ProfileScreen);
