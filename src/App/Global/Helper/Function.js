import { ToastAndroid } from 'react-native';

export const Toast = (message) => {
  return (
    ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.CENTER, 25, 50)
  )
}