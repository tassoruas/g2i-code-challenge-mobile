'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationParams } from 'react-navigation';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';
import QuizData from '../helpers/types/QuizData';

// Redux
import { connect } from 'react-redux';
import { resetScoreAction } from '../redux/actions/quizActions';

// Components
import NoConnectionModal from '../components/NoConnectionModal';
import GenericButton from '../components/GenericButton';

// Styles
import colors from '../helpers/colors';
import styles from './screenStyles';

interface Props {
  navigation: NavigationParams;
  quiz: any;
  resetScoreAction: Function;
}

interface State {
  hasInternet: boolean;
  networkErrorModalVisible: boolean;
}

class Home extends React.Component<Props, State> {
  unsubscribeInternetChecker: NetInfoSubscription;
  _isMounted: boolean;

  constructor(props) {
    super(props);
    this.state = {
      hasInternet: false,
      networkErrorModalVisible: false
    };
    this._isMounted = false;
    this.unsubscribeInternetChecker = NetInfo.addEventListener(async state => {
      if (this._isMounted == true) {
        this.setState({ hasInternet: state.isConnected, networkErrorModalVisible: !state.isConnected });
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this.unsubscribeInternetChecker();
    this._isMounted = false;
  }

  render() {
    return (
      <View style={styles.container}>
        <NoConnectionModal isVisible={this.state.networkErrorModalVisible} />
        <Text style={styles.title}>Welcome to the Trivia Challenge!</Text>
        <Text style={styles.subTitle}>You will be presented with 10 True or False questions.</Text>
        <Text style={styles.subTitle}>Can you score 100%?</Text>
        <GenericButton
          color={colors.green}
          onPress={() => {
            this.props.resetScoreAction();
            this.props.navigation.navigate('Quiz');
          }}
          text="BEGIN"
        />
        <Text style={styles.subTitle}>Best Score: {this.props.quiz.bestScore}</Text>
      </View>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

const mapDispatch = {
  resetScoreAction
};

export default connect(mapState, mapDispatch)(Home);
