import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  iconWelcome: {
    width: '90%',
    resizeMode: 'contain',
    marginBottom: 16
  },
  inputBox: {
    width: '100%',
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  signupQuestion: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupAnswer: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    width: '100%',
    marginTop: 32,
    marginBottom: 4
  },

  
});
