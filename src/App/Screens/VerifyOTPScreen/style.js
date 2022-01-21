import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.darkSoftGreen,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  greetingsTitle: {
    color: Colors.white,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16
  },
  inputBox: {
    width: '100%',
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.white,
    marginBottom: 32
  },
  button: {
    marginBottom: 4
  },
  resendCodeQuestion: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    marginRight: 8
  },
  resendCodeAnswer: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  }

});
