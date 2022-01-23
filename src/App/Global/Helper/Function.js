import { Linking, ToastAndroid } from 'react-native';

export const Toast = (message) => {
  return (
    ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50)
  )
}

export const openUrl = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      return Linking.openURL(url);
    } else {
      console.log('Don\'t know how to open URI: ' + url);
    }
  }).catch(err => console.error('An error occurred', err));
} 