'use strict';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { AllHtmlEntities } from 'html-entities';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      counter: 1
    };
  }

  async componentDidMount() {
    const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', {
      headers: { 'Content-Type': 'application/json;charset=utf-8' }
    });
    this.setState({ data: response.data.results });
  }

  incrementResponse(id, response) {
    if (this.state.counter == 10) {
      this.props.navigation.navigate('Results', { data: this.state.data });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  showQuestion(id) {
    const question = this.state.data[id].question;
    const entities = new AllHtmlEntities();
    const filteredQuestion = entities.decode(question);
    this.state.data[id].question = filteredQuestion;
    return filteredQuestion;
  }

  render() {
    if (this.state.data == undefined) {
      return <ActivityIndicator style={styles.spinner} />;
    }
    return (
      <View style={styles.container}>
        <Text>Entertainment: Video Games</Text>
        <View style={styles.box}>
          <Text>{this.showQuestion(this.state.counter - 1)}</Text>
        </View>
        <Text>{this.state.counter} of 10</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.incrementResponse()}>
            <Text>True</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.incrementResponse()}>
            <Text>False</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Quiz;
