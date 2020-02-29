import { StyleSheet } from 'react-native';
import colors from '../helpers/colors';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%'
  },
  buttonsContainer: {
    height: '30%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  questionContainer: {
    paddingTop: 25,
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  questionBox: {
    height: '80%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  secondQuestionBox: {
    top: '6%',
    width: '82%',
    height: '6%',
    backgroundColor: '#f1f1f1',
    borderRadius: 15,
    elevation: 20
  },
  thirdQuestionBox: { top: '12.5%', width: '72%', height: '6%', backgroundColor: '#e5e5e5', borderRadius: 10, elevation: 20 },
  question: {
    fontSize: 22,
    textAlign: 'center',
    width: '80%'
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
