import { StyleSheet } from 'react-native';
import colors from '../helpers/colors';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.lightGray
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    fontSize: 20,
    margin: 5
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    height: '40%'
  },
  question: {
    textAlign: 'center'
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center'
  },
  resultList: { flex: 0.8, width: '95%', height: 'auto' }
});
