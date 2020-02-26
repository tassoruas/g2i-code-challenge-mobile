'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './screenStyles';
import { NavigationParams } from 'react-navigation';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';
import NoConnectionModal from '../components/NoConnectionModal';
import GenericButton from '../components/GenericButton';
import colors from '../helpers/colors';

interface Props {
  navigation: NavigationParams;
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
        <GenericButton color={colors.green} onPress={() => this.props.navigation.navigate('Quiz')} text="BEGIN" />
        <Text style={styles.subTitle}>Best Score: </Text>
      </View>
    );
  }
}

export default Home;
