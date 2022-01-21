import {StyleSheet} from 'react-native';
import {Colors} from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  cardContainerHomeScreen: {
    marginBottom: 16
  },
  imageHomeScreen: {
    width: '100%',
    height: 200
  },
  judulCardList: {
    marginTop: 8,
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 4,
  },

  authorCardList: {
    fontSize: 12,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    color: Colors.green,
  },

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.green,
  },
});
