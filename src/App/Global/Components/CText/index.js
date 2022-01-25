// Core
import * as React from 'react';
import { Text } from 'react-native';
import { Colors } from '../CThemes';

// Components

/**
 * @example
 * <CText>Hello</CText>
 * <CText left={5} size={10}>World</CText>
 * <CText bold center color="red">!!</CText>
 * @param {any} props
 * @param {number} size - font size.
 * @param {boolean} bold - font weight bold.
 * @param {boolean} center - text align center.
 * @param {string} color - font color.
 * @param {number} top - margin top.
 * @param {number} right - margin right.
 * @param {number} bottom - margin bottom.
 * @param {number} left - margin left.
 * @param {object} style - custom style.
 */
const CText = ({
  children,
  size = 14,
  bold = false,
  center = false,
  color = Colors.darkGreen || 'initial',
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  lineHeight = null,
  style = {},
  ...props
}) => {
  const fontFamily = bold ? 'Poppins-Bold' : 'Poppins-Regular';

  return <Text
    style={{
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      color,
      fontFamily,
      fontSize: size,
      lineHeight,
      textAlign: center ? 'center' : 'left',
      ...style
    }}
    {...props}
  >
    {children}
  </Text>;
};

export default CText;
