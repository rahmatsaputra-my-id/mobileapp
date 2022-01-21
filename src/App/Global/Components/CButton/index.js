// Core
import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import CFlexRow from '../CFlexRow';

// Components
import CText from '../CText';
import { Colors } from '../CThemes';

/**
 * @example
 * <CButton />
 * <CButton outline/>
 * <CButton label="Lanjutkan" />
 * <CButton label="Mengerti" onPress={() => alert('hello world')} />
 * <CButton label="Aktivasi" loading />
 * <CButton label="Aktivasi" disabled />
 * @param {any} props
 * @param {string} label - button name.
 * @param {boolean} outline - button with white background and border color.
 * @param {function} onPress - button action when pressed.
 * @param {boolean} loading - button loading state.
 * @param {boolean} disabled - button can't be pressed.
 * @param {number} top - margin top.
 * @param {number} bottom - margin bottom.
 */
const CButton = ({
  label = 'Button',
  outline = false,
  outlineColor = Colors.darkGreen,
  iconActive = false,
  iconDisabled = false,
  onPress = () => { },
  loading = false,
  disabled = false,
  top = 0,
  bottom = 0,
  style = {},
  ...props
}) => {
  if (loading) disabled = true;

  const backgroundDisabled = outline ? 'transparent' : Colors.grey20;
  const buttonStyle = {
    width: '100%',
    paddingVertical: 15,
    marginTop: top,
    marginBottom: bottom,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    borderWidth: 1,
    borderColor: disabled ? 'transparent' : outlineColor,
    backgroundColor: disabled ? backgroundDisabled : outline ? Colors.white : Colors.darkGreen,
    ...style
  };
  const icon = disabled ? iconDisabled : iconActive;
  const buttonFontColor = disabled
    ? Colors.grey60
    : outline
      ? outlineColor
      : Colors.white;

  return (
    <TouchableOpacity style={buttonStyle} onPress={() => onPress()} disabled={disabled} {...props}>
      {
        loading
          ? <ActivityIndicator color={Colors.darkBlue} />
          : (
            <CFlexRow justify="center" align="center">
              {iconActive ? <Image source={icon} style={{ width: 16, height: 16, marginRight: 8, bottom: 1 }} /> : null}
              <CText size={13} lineHeight={16} color={buttonFontColor} center bold>{label}</CText>
            </CFlexRow>
          )
      }
    </TouchableOpacity>
  );
};

export default CButton;
