import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    fontSize: 20,
    padding: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    width: 400,
    height: 400
  },
  question: {
    textAlign: 'center'
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
