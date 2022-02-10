import { StyleSheet } from 'react-native';
import { Colors } from '../../Components/CThemes';

export const styles = StyleSheet.create({
  buttonCloseIcon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain'
  },
  icon: {
    width: 128,
    height: 128
  },
  title: {
    marginTop: 24,
    marginBottom: 16,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  description: {
    marginBottom: 16,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center'
  },
  cancel: {
    marginTop: 12
  }
});

export const stylesProps = (positionBottom) => StyleSheet.create({
  outterContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: positionBottom ? 'flex-end' : 'center',
    backgroundColor: Colors.backgroundColorModal,
    position: 'absolute'
  },
  innerContainer: {
    width: positionBottom ? '100%' : '90%',
    paddingHorizontal: 24,
    paddingTop: positionBottom ? 48 : 32,
    paddingBottom: positionBottom ? 32 : 24,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: positionBottom ? 0 : 12,
    borderBottomRightRadius: positionBottom ? 0 : 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonCloseContainer: {
    position: 'absolute',
    right: positionBottom ? 20 : 10,
    top: positionBottom ? 20 : 10,
    width: 40,
    height: 40
  },
  accept: {
    marginTop: positionBottom ? 24 : 16
  }
});
