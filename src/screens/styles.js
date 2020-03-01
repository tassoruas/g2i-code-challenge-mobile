import { StyleSheet, Dimensions } from 'react-native';
import colors from '../helpers/colors';
const window = Dimensions.get('window');

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  circularContainer: {
    width: '60%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 1500
  },
  headerImage: {
    alignSelf: 'center',
    resizeMode: 'stretch',
    width: '50%',
    height: '50%'
  },
  headerContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: window.width / 2,
    borderBottomEndRadius: window.width / 2,
    elevation: 20
  },
  headerBody: {
    backgroundColor: colors.themePrimary,
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden'
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '52%'
  },
  footer: {
    backgroundColor: colors.themePrimary,
    width: '100%',
    height: '3%'
  },
  playButtonContainer: {
    marginTop: '10%',
    width: '40%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themePrimary,
    borderRadius: 1500,
    elevation: 10
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.themePrimary,
    textAlign: 'center'
  }
});

export const QuizStyle = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: window.width / 2,
    borderBottomEndRadius: window.width / 2,
    elevation: 20
  },
  headerBody: {
    backgroundColor: colors.themePrimary,
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden'
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
  buttonsContainer: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly'
  },
  trueButton: {
    width: '26%',
    height: '45%',
    backgroundColor: colors.green,
    borderRadius: 1500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  falseButton: {
    width: '26%',
    height: '45%',
    backgroundColor: colors.red,
    borderRadius: 1500,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const ResultsStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  header: {
    backgroundColor: colors.themePrimary,
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  resultList: { flex: 0.8, width: '95%', borderColor: colors.midGray, borderRightWidth: 2 }
});

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  spinner: {
    flex: 1,
    backgroundColor: colors.themePrimary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.themeSecondary,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.themeSecondary,
    textAlign: 'center'
  }
});
