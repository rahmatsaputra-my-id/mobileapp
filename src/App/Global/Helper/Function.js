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

export const maxLengthString = (string, maxLength) => {
  let temp;
  if (string) {
    if (string.length >= maxLength) {
      temp = `${string.substring(0, maxLength)}...`;
    } else {
      temp = string;
    }
  }
  return temp;
}

export const formatRupiah = (number, prefix = false) => {
  try {
    if (typeof number == "number") {
      number = number.toString();
      console.log('number >>>', number);
    }

    var number_string = number.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      spliter = split[0].length % 3,
      rupiah = split[0].substr(0, spliter),
      thousand = split[0].substr(spliter).match(/\d{3}/gi);

    let separator = false;
    if (thousand) {
      separator = spliter ? '.' : '';
      rupiah += separator + thousand.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    rupiah = rupiah.charAt(0) === '0' ? rupiah.substr(1) : rupiah;

    return prefix == undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
  } catch (error) {
    return 'Rp';
  }
}