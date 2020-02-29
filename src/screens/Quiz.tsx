'use strict';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AllHtmlEntities } from 'html-entities';
import { NavigationParams } from 'react-navigation';
import QuizData from '../helpers/dataTypes/QuizData';
import axios from 'axios';

// Redux
import { connect } from 'react-redux';
import { addDataAction, incrementResponseAction } from '../redux/actions/quizActions';

// Components
import GenericButton from '../components/GenericButton';

// Styles
import colors from '../helpers/colors';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

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
      const resp = await axios.get(
        `https://opentdb.com/api.php?amount=${this.props.quiz.answersCount}&difficulty=${this.props.quiz.difficulty}&type=boolean`,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      if (resp.data.toString().includes('Connection refused') || resp.data.response_code != 0) {
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

  componentDidUpdate() {
    console.log('this.props.quiz', this.props.quiz);
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
      <View>
        <LinearGradient colors={['#654ea3', '#3c1053']}>
          <View style={styles.questionContainer}>
            <View style={styles.thirdQuestionBox}></View>
            <View style={styles.secondQuestionBox}></View>
            <View style={styles.questionBox}>
              <Text style={styles.title}>{this.props.quiz.data[this.props.quiz.counter].category}</Text>
              <Text style={styles.question}>{this.props.quiz.data[this.props.quiz.counter].question}</Text>
              <Text style={styles.subTitle}>
                {this.props.quiz.counter + 1} of {this.props.quiz.data.length}
              </Text>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <GenericButton
              text={'True'}
              textSize={24}
              width={'80%'}
              height={'23%'}
              onPress={() => this.props.incrementResponseAction(true, this.props.quiz.data[this.props.quiz.counter].correct_answer.toLowerCase())}
              color={colors.green}
            />
            <GenericButton
              text={'False'}
              textSize={24}
              width={'80%'}
              height={'23%'}
              onPress={() => this.props.incrementResponseAction(false, this.props.quiz.data[this.props.quiz.counter].correct_answer.toLowerCase())}
              color={colors.red}
            />
          </View>
        </LinearGradient>
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
