import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  judul: {
    color: '#190042',
    fontSize: 23,
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: 250,
    marginBottom: 10
  },

  category: {
    color: Colors.red,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    fontWeight: 'bold'
  },

  container: {
    backgroundColor: Colors.white,
    paddingBottom: 70
  },

  publishedAt: {
    marginBottom: 10,
    color: '#bebfc0',
    fontSize: 12,
    marginLeft: 16,
    marginRight: 16,
  },

  sinopsis: {
    textAlign: 'justify',
    marginLeft: 16,
    marginRight: 16,
  }
});
