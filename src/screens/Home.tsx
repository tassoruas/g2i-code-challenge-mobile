'use strict';
import React from 'react';
import { Text, View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { NavigationParams } from 'react-navigation';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';
import { AllHtmlEntities } from 'html-entities';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import { addDataAction, changeDifficultyAction } from '../redux/actions/quizActions';

// Components
import GenericModal from '../components/GenericModal';

// Styles
import colors from '../helpers/colors';
import SharedStyle, { HomeStyle } from './styles';
import GenericButton from '../components/GenericButton';

// Helpers
import { difficulty } from '../helpers/dataTypes/QuizDifficulty';

interface Props {
  addDataAction: Function;
  changeDifficultyAction: Function;
  navigation: NavigationParams;
  quiz: any;
}

interface State {
  hasInternet: boolean;
  networkErrorModalVisible: boolean;
  spinValue: Animated.Value;
  difficultyValue: Animated.Value;
  playValue: Animated.Value;
  showDifficultyOptions: boolean;
}

class Home extends React.Component<Props, State> {
  unsubscribeInternetChecker: NetInfoSubscription;
  _isMounted: boolean;

  constructor(props) {
    super(props);
    this.state = {
      hasInternet: false,
      networkErrorModalVisible: false,
      spinValue: new Animated.Value(0),
      playValue: new Animated.Value(0),
      difficultyValue: new Animated.Value(0),
      showDifficultyOptions: false
    };
    this._isMounted = false;
    this.unsubscribeInternetChecker = NetInfo.addEventListener(async state => {
      if (this._isMounted == true) {
        this.setState({ hasInternet: state.isConnected, networkErrorModalVisible: !state.isConnected });
      }
    });
  }

  /**
   * Get OpenTDB quiz data and share it with redux store with addDataAction
   */
  async fetchData() {
    try {
      this._isMounted = true;
      const resp = await axios.get(
        `https://opentdb.com/api.php?amount=${this.props.quiz.answersCount}&difficulty=${this.props.quiz.difficulty}&type=boolean`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      if (resp.data.toString().includes('Connection refused') || resp.data.response_code != 0) {
        return console.error('Home: fetchData: Fetch failed from opentdb');
      }

      for (const [index, result] of resp.data.results.entries()) {
        const filteredQuestion = this.filterQuestion(result.question);
        resp.data.results[index].question = filteredQuestion;
      }

      this.props.addDataAction(resp.data.results);
    } catch (error) {
      console.error('Quiz: componentDidMount:', error);
    }
  }

  /**
   * Filter HTML special characters
   * @param question
   * @returns {string} filteredQuestion legible question
   */
  filterQuestion(question: string) {
    const entities = new AllHtmlEntities();
    const filteredQuestion = entities.decode(question);
    return filteredQuestion;
  }

  componentWillUnmount() {
    this.unsubscribeInternetChecker();
    this._isMounted = false;
  }

  /**
   * Hide playButtonContainer and Show difficulty buttons
   * If player is already on a quiz, it just navigate to the quiz page
   */
  openDifficultyOptions() {
    if (this.props.quiz.data.length != 0) this.props.navigation.navigate('Quiz');

    Animated.timing(this.state.playValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.back(1)
    }).start();

    setTimeout(() => {
      this.setState({ showDifficultyOptions: true });
      Animated.timing(this.state.difficultyValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.elastic(1)
      }).start();
    }, 200);
  }

  /**
   * Takes the player difficuty option, share it with redux store
   * Animate the logo and move to the quiz page
   * @param {difficulty} difficulty enum
   */
  startQuiz(difficulty: difficulty) {
    this.props.changeDifficultyAction(difficulty);
    this.fetchData();

    let logoAnimation = () => {
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.elastic(3),
        useNativeDriver: true
      }).start();
    };
    logoAnimation();
    setTimeout(() => {
      this.props.navigation.navigate('Quiz');
    }, 1500);
    setTimeout(() => {
      this.setState({ spinValue: new Animated.Value(0) });
      this.setState({ showDifficultyOptions: false });
    }, 1700);
  }

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const playPosition = this.state.playValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 500]
    });
    const difficultyPosition = this.state.difficultyValue.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0]
    });
    return (
      <View style={HomeStyle.container}>
        <View style={HomeStyle.headerContainer}>
          <View style={HomeStyle.headerBody} />
          <Animated.View style={[HomeStyle.circularContainer, { transform: [{ rotate: spin }] }]}>
            <Image style={HomeStyle.headerImage} source={require('../assets/logo.png')} resizeMode={'stretch'} />
            <Text style={HomeStyle.logoText}>Trivia</Text>
          </Animated.View>
        </View>
        <View style={HomeStyle.body}>
          <Text style={SharedStyle.subTitle}>You will be presented with 10 True or False questions</Text>
          <Text style={SharedStyle.title}>Can you score 100%?</Text>
          {this.state.showDifficultyOptions === false ? (
            <Animated.View style={[HomeStyle.playButtonContainer, { transform: [{ translateY: playPosition }] }]}>
              <TouchableOpacity style={HomeStyle.playButton} onPress={() => this.openDifficultyOptions()}>
                <Image style={{ height: '50%', width: '50%' }} resizeMode={'stretch'} source={require('../assets/triangleButton.png')} />
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <Animated.View style={{ marginTop: '10%', transform: [{ translateY: difficultyPosition }] }}>
              <GenericButton
                text={'Easy'}
                textSize={20}
                textColor={'#fff'}
                color={colors.themePrimary}
                onPress={() => this.startQuiz(difficulty.easy)}
              />
              <GenericButton
                text={'Medium'}
                textSize={20}
                textColor={'#fff'}
                color={colors.themePrimary}
                onPress={() => this.startQuiz(difficulty.medium)}
              />
              <GenericButton
                text={'Hard'}
                textSize={20}
                textColor={'#fff'}
                color={colors.themePrimary}
                onPress={() => this.startQuiz(difficulty.hard)}
              />
            </Animated.View>
          )}
        </View>
        <View style={HomeStyle.footer}></View>
        <GenericModal
          text={'Oops.. Seems like you are not connected to the internet. Please, check your connection to continue playing'}
          isVisible={this.state.networkErrorModalVisible}
          showActivityIndicator={true}
        />
      </View>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

const mapDispatch = {
  addDataAction,
  changeDifficultyAction
};

export default connect(mapState, mapDispatch)(Home);
