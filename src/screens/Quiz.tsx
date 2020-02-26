'use strict';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './screenStyles';
import axios from 'axios';
import { AllHtmlEntities } from 'html-entities';
import { NavigationParams } from 'react-navigation';
import GenericButton from '../components/GenericButton';
import QuizData from '../helpers/types/QuizData';
import colors from '../helpers/colors';

type Props = {
  navigation: NavigationParams;
};

type State = {
  data: Array<QuizData>;
  counter: number;
  correctAnswers: Array<boolean>;
};

class Quiz extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: undefined,
      counter: 0,
      correctAnswers: []
    };
  }

  async componentDidMount() {
    const quizCount = 10;
    const difficulty = 'hard';
    const response = await axios.get(`https://opentdb.com/api.php?amount=${quizCount}&difficulty=${difficulty}&type=boolean`, {
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState({ data: response.data.results });
  }

  incrementResponse(response: boolean) {
    if (String(response) === this.state.data[this.state.counter].correct_answer.toLowerCase()) {
      this.state.correctAnswers.push(true);
    } else {
      this.state.correctAnswers.push(false);
    }
    if (this.state.counter == this.state.data.length - 1) {
      this.props.navigation.navigate('Results', { data: this.state.data, correctAnswers: this.state.correctAnswers });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  showQuestion(index: number) {
    const question = this.state.data[index].question;
    const entities = new AllHtmlEntities();
    const filteredQuestion = entities.decode(question);
    this.state.data[index].question = filteredQuestion;
    return filteredQuestion;
  }

  render() {
    if (this.state.data == undefined) {
      return <ActivityIndicator style={styles.spinner} />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.data[this.state.counter].category}</Text>
        <View style={styles.box}>
          <Text style={styles.question}>{this.showQuestion(this.state.counter)}</Text>
        </View>
        <Text style={styles.subTitle}>
          {this.state.counter + 1} of {this.state.data.length}
        </Text>
        <View style={styles.buttonsContainer}>
          <GenericButton text={'True'} onPress={() => this.incrementResponse(true)} color={colors.green} />
          <GenericButton text={'False'} onPress={() => this.incrementResponse(false)} color={colors.red} />
        </View>
      </View>
    );
  }
}

export default Quiz;
