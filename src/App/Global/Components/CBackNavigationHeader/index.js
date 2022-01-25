// Core
import React from 'react';
import {
  Image,
  TouchableOpacity,
  View
} from 'react-native';

// Assets
import { iconArrowLeft } from '../../../Assets/Shared';

// Components
import CText from '../CText';
import CFlexRow from '../CFlexRow';
import { NavigationContext } from '@react-navigation/native';

/**
 * Orbit back header app.
 * @example
 * <CBackNavigationHeader />
 * <CBackNavigationHeader title="Notifikasi" />
 * @param {any} props
 * @param {string} title - header title.
 * @param {function} onPress - triggered when back icon pressed (default value is navigation.goBack()).
 * @param {Image<source>} rightIcon - right icon.
 * @param {function} rightOnPress - triggered when right icon pressed.
 */
const CBackNavigationHeader = ({
  title = 'Title',
  icon = iconArrowLeft,
  onPress = false,
  rightIcon = false,
  rightOnPress = () => { },
  textStyle = {}
}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <CFlexRow justify="space-between" align="center" paddingVertical={5}>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        {
          icon &&
          <TouchableOpacity onPress={() => onPress ? onPress() : navigation.goBack()}>
            <Image source={icon} style={{ width: 17, height: 17 }} />
          </TouchableOpacity>
        }
      </View>
      <CText size={20} style={{ fontWeight: 'bold', ...textStyle }}>{title}</CText>
      {
        rightIcon ?
          (
            <TouchableOpacity onPress={() => rightOnPress()}>
              <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <Image source={rightIcon} style={{ width: 24, height: 24 }} />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 17, height: 17, marginHorizontal: 20, marginVertical: 10 }} />
          )
      }
    </CFlexRow>
  );
};

export default CBackNavigationHeader;
