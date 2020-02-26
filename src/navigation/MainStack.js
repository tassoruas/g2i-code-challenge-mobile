'use strict';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Results from '../screens/Results';

const MainStack = createStackNavigator(
  {
    Home: { screen: Home, navigationOptions: { headerShown: false } },
    Quiz: { screen: Quiz, navigationOptions: { headerShown: false } },
    Results: { screen: Results, navigationOptions: { headerShown: false } }
  },
  {
    defaultNavigationOptions: {
      ...TransitionPresets.DefaultTransition
    }
  }
  // MainStackConfig
);

export default createAppContainer(MainStack);
