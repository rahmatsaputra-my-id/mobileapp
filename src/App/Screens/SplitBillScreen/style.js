import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  content: {
    backgroundColor: Colors.lightGreen,
    padding: 16,
    alignItems: 'center'
  },
  greetingTitle: {
    fontSize: 14,
    marginBottom: 16,
    color: Colors.white
  },
  historyContainer: {
    paddingTop: 32,
    paddingHorizontal: 16
  },
  historyTitle: {
    fontSize: 16,
    borderBottomWidth: 2,
    borderColor: Colors.grey2,
    paddingBottom: 8,
    fontWeight: 'bold',
    color: Colors.darkGreen
  },
  historyCard: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  historyCardIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
    alignSelf:'center',
  },
  historyCardIconArrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: Colors.darkGreen,
    alignSelf:'center'
  },
  historyCardDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    paddingHorizontal: 8
  }
});
