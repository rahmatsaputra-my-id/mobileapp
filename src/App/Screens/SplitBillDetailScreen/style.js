import { StyleSheet } from 'react-native';
import { Colors } from '../../Global/Components/CThemes';

export const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1
  },
  container: {
    justifyContent: 'space-between',
    flex: 1
  },
  totalNoteWrapper: {
    backgroundColor: Colors.lightGreen,
    padding: 16,
  },
  totalContainer: {
    paddingTop: 8,
    paddingBottom: 64,
  },

  totalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.grey60,
    marginBottom: 8
  },
  total: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white
  },

  inputBoxTotal: {
    width: '52%',
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 25,
    color: '#ffffff',
  },

  noteContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  iconNote: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor: Colors.grey60,
    marginRight: 8,
    marginTop: 8
  },
  inputBoxNote: {
    width: '90%',
    height: 70,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 16,
    paddingHorizontal: 16,
    flexWrap: 'wrap',
    fontSize: 16,
    color: '#ffffff',
  },

  arrowRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20
  },
  arrowRightTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.grey60,
  },

  listSplitBill: {
    padding: 16
  },
  splitBillTitle: {
    fontSize: 14,
    borderBottomWidth: 2,
    borderColor: Colors.grey2,
    paddingBottom: 8,
    marginBottom: 8,
    paddingTop: 8,
    fontWeight: 'bold',
    color: Colors.darkGreen
  },

  splitBillCard: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  splitBillCardUsername: {
    fontSize: 14,
  },
  splitBillCardPhoneNumber: {
    fontSize: 14,
  },

  buttonContainer: {
    padding: 16,
  }
});
