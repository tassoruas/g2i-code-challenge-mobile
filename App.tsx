import React from 'react';
import MainStack from './src/navigation/MainStack';
import { SafeAreaView } from 'react-native';
import NavigationService from './src/helpers/NavigationService';

// Redux
import store from './src/redux/store';
import { Provider } from 'react-redux';

// Styles
import styles from './src/screens/screenStyles';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.appContainer}>
          <MainStack
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}
