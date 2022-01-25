import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  totalContainer: {
    backgroundColor: Colors.lightGreen,
    padding: 16,
    alignItems: 'center'
  },
  iconTotal: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    tintColor: Colors.grey3
  },
  totalLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 16,
    color: Colors.grey5,
    marginRight: 8
  },
  iconInformation: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    tintColor: Colors.white
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
    paddingBottom: 4
  },

  noteContainer: {
    paddingTop: 32,
    paddingHorizontal: 16
  },

  noteLabel: {
    fontSize: 14,
    borderBottomWidth: 2,
    borderColor: Colors.grey2,
    fontWeight: 'bold',
    color: Colors.darkGreen,
    paddingBottom: 4
  },
  note: {
    fontSize: 16,
    paddingTop: 8
  },
  
  expiredContainer: {
    paddingTop: 32,
    paddingHorizontal: 16
  },
  expiredLabel: {
    fontSize: 14,
    borderBottomWidth: 2,
    borderColor: Colors.grey2,
    fontWeight: 'bold',
    color: Colors.darkGreen,
    paddingBottom: 8
  },
  exiredDate: {
    fontSize: 16,
    paddingTop: 8
  },
  
  historyContainer: {
    paddingTop: 24,
    paddingHorizontal: 16
  },
  historyTitle: {
    fontSize: 14,
    borderBottomWidth: 2,
    borderColor: Colors.grey2,
    paddingBottom: 8,
    fontWeight: 'bold',
    color: Colors.darkGreen
  },
  historyCard: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyCardIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  historyCardIconArrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: Colors.darkGreen,
    alignSelf: 'center'
  },
  historyCardUsername: {
    fontSize: 14,
  },
  historyCardPhoneNumber: {
    fontSize: 14,
  },
  historyCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    paddingHorizontal: 8
  }
});
