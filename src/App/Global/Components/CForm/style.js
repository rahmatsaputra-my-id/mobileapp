
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native';
import { Colors } from '../CThemes';

export const styles = StyleSheet.create({
  // Home Screen
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold'
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 10
  },
  borderInput: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 8,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: (Dimensions.get('window').width / 2) - 140,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 20,
    paddingVertical: 13

  },
  subtittle: {
    fontSize: 14,
    marginHorizontal: 18,
    fontWeight: 'bold'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  noteText: {
    fontSize: 11,
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'red',
    marginLeft: 25
  },


  container: {
    backgroundColor: Colors.white
  },

  judulCardList: {
    marginTop: 8,
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 4
  },

  authorCardList: {
    fontSize: 12,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    color: Colors.grey
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.green
  },
});
