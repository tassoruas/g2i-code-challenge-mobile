'use strict';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import { NavigationParams } from 'react-navigation';
import QuizData from '../helpers/types/QuizData';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import { addDataAction, incrementResponseAction } from '../redux/actions/quizActions';

// Components
import GenericButton from '../components/GenericButton';

// Styles
import colors from '../helpers/colors';
import styles from './screenStyles';

interface Props {
  addDataAction: Function;
  incrementResponseAction: Function;
  navigation: NavigationParams;
  quiz: any;
}

interface State {
  data: Array<QuizData>;
  counter: number;
  correctAnswers: Array<boolean>;
}

class Quiz extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const resp = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (resp.data.toString().includes('Connection refused')) {
        return console.error('Quiz: componentDidMount: Fetch failed from opentdb');
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

  filterQuestion(question: string) {
    const entities = new AllHtmlEntities();
    const filteredQuestion = entities.decode(question);
    return filteredQuestion;
  }

  render() {
    if (!this.props.quiz.data || this.props.quiz.data.length == 0) {
      return <ActivityIndicator style={styles.spinner} />;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.quiz.data[this.props.quiz.counter].category}</Text>
        <View style={styles.box}>
          <Text style={styles.question}>{this.props.quiz.data[this.props.quiz.counter].question}</Text>
        </View>
        <Text style={styles.subTitle}>
          {this.props.quiz.counter + 1} of {this.props.quiz.data.length}
        </Text>
        <View style={styles.buttonsContainer}>
          <GenericButton
            text={'True'}
            onPress={() => this.props.incrementResponseAction(true, this.props.quiz.data[this.props.quiz.counter].correct_answer.toLowerCase())}
            color={colors.green}
          />
          <GenericButton
            text={'False'}
            onPress={() => this.props.incrementResponseAction(false, this.props.quiz.data[this.props.quiz.counter].correct_answer.toLowerCase())}
            color={colors.red}
          />
        </View>
      </View>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

const mapDispatch = {
  incrementResponseAction,
  addDataAction
};

export default connect(mapState, mapDispatch)(Quiz);
