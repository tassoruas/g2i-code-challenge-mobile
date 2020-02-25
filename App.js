import React from 'react';
import MainStack from './src/navigation/MainStack';
import { SafeAreaView } from 'react-native';
import styles from './src/screens/styles';
// import { store } from './src/redux';
// import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
      <SafeAreaView style={styles.appContainer}>
        <MainStack />
      </SafeAreaView>
      // </Provider>
    );
  }
}
