// Core
import * as React from 'react';
import { Modal, View, Image } from 'react-native';

// Components
import CText from '../CText';
import CButton from '../CButton';

import { styles, stylesProps } from './style';

/**
 * @example
 * <CModal visible={true} />
 * <CModal visible={false} />
 * @param {boolean} visible - show modal.
 */

const CModal = ({
  description = false,
  icon = false,
  labelAccept = false,
  labelCancel = false,
  onPressAccept = false,
  onPressCancel = false,
  positionBottom = false,
  title = false,
  visible = false,
  loading = false
}) => (
  <Modal
    animationType='fade'
    transparent
    visible={visible}
  >
    <View style={stylesProps(positionBottom).outterContainer} >
      <View style={stylesProps(positionBottom).innerContainer}>

        {icon ? (
          <Image
            source={icon}
            style={styles.icon}
          />
        ) : null}

        {title ? (
          <CText
            children={title}
            style={styles.title}
          />
        ) : null}

        {description ? (
          <CText
            children={description}
            style={styles.description}
          />
        ) : null}

        {labelAccept && onPressAccept ? (
          <CButton
            loading={loading}
            label={labelAccept}
            onPress={onPressAccept}
            style={stylesProps(positionBottom).accept}
          />
        ) : null}

        {labelCancel && onPressCancel ? (
          <CButton
            label={labelCancel}
            onPress={onPressCancel}
            outline
            style={styles.cancel}
          />
        ) : null}
      </View>
    </View>
  </Modal>
);

export default CModal;
