import React, { Component } from 'react';
import { Card, Icon } from 'react-native-elements';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { styles } from './styles';
import { iconRahmatSaputra } from '../../Assets/Shared';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _handlerLogout = async () => {
    const { navigation } = this.props;

    AsyncStorage.clear();
    // AsyncStorage.removeItem();
    navigation.navigate('LoginScreen');
  }

  render() {
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
                    {'Rahmat Saputra'}
                  </Text>
                  <View style={styles.userAddressRow}>
                    <View>
                      <Icon
                        name="place"
                        underlayColor="transparent"
                        iconStyle={styles.placeIcon}
                      />
                    </View>
                    <View style={styles.userCityRow}>
                      <Text style={styles.userCityText}>
                        {'Jaksel, DKI Jakarta'}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>

            {/* telpon */}
            <TouchableOpacity>
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
                      {'+62 812 1019 7870'}
                    </Text>
                  </View>
                  <View style={styles.telNameColumn}>
                    <Text style={styles.telNameText}>{"Mobile"}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Separator */}
            <View style={styles.separatorContainer}>
              <View style={styles.separatorOffset} />
              <View style={styles.separator} />
            </View>

            <TouchableOpacity>
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
                      {'rahmatsaputra.my.id@gmail.com'}
                    </Text>
                  </View>
                  <View style={styles.telNameColumn}>
                    <Text style={styles.telNameText}>
                      {'Email'}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.separatorContainer}>
              <View style={styles.separatorOffset} />
              <View style={styles.separator} />
            </View>

            <TouchableOpacity onPress={() => this._handlerLogout()}>
              <View style={{ ...styles.telContainer, justifyContent: 'center' }}>
                <Text style={styles.telNumberText}>
                  {'LOGOUT'}
                </Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView >
    );
  }
}
