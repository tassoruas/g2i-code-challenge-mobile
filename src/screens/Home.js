import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Trivia Challenge!</Text>
        <Text>You will be presented with 10 True or False questions.</Text>
        <Text>Can you score 100%?</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Quiz')}>
          <Text>BEGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
