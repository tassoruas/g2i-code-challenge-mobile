'use strict';
import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { NavigationParams } from 'react-navigation';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';

// Redux
import { connect } from 'react-redux';
import { restartAction } from '../redux/actions/quizActions';

// Components
import GenericModal from '../components/GenericModal';
import GenericButton from '../components/GenericButton';

// Styles
import colors from '../helpers/colors';
import styles from './styles';

interface Props {
  navigation: NavigationParams;
  quiz: any;
  restartAction: Function;
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
      <ImageBackground style={styles.imageBackground} imageStyle={{ opacity: 0.3 }} source={require('../assets/backgroundTexture.jpg')}>
        <View style={styles.container}>
          <GenericModal
            text={'Oops... Seems like you are not connected to the internet'}
            isVisible={this.state.networkErrorModalVisible}
            showActivityIndicator={true}
          />
          <Text style={styles.title}>Welcome to the Trivia Challenge!</Text>
          <Text style={styles.subTitle}>You will be presented with 10 True or False questions.</Text>
          <Text style={styles.subTitle}>Can you score 100%?</Text>
          <GenericButton
            height={50}
            width={220}
            textSize={20}
            color={colors.green}
            onPress={() => {
              this.props.restartAction();
              this.props.navigation.navigate('Quiz');
            }}
            text="BEGIN"
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

const mapDispatch = {
  restartAction
};

export default connect(mapState, mapDispatch)(Home);
