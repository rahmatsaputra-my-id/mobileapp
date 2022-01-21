
import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  placeIcon: {
    color: Colors.white,
    fontSize: 26,
  },
  scroll: {
    backgroundColor: Colors.white,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: Colors.border,
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },

  telContainer: {
    flexDirection: 'row',
    padding: 30,
  },
  telIconRow: {
    justifyContent: 'center',
    marginRight: 30,
  },
  telSmsIcon: {
    color: Colors.grey2,
    fontSize: 30,
  },
  telSmsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: '#01C89E',
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: Colors.grey,
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  separatorContainer: {
    flexDirection: 'row',
  },
  separatorOffset: {
    flex: 2,
    flexDirection: 'row',
  },
  separator: {
    flex: 8,
    flexDirection: 'row',
    borderColor: Colors.grey93,
    borderWidth: 0.8,
  },
});
