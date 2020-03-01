'use strict';
import React from 'react';
import { ActivityIndicator, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationParams } from 'react-navigation';
import QuizData from '../helpers/dataTypes/QuizData';

// Redux
import { connect } from 'react-redux';
import { addDataAction, incrementResponseAction } from '../redux/actions/quizActions';

// Styles
import colors from '../helpers/colors';
import styles, { QuizStyle } from './styles';

interface Props {
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

  render() {
    if (!this.props.quiz.data || this.props.quiz.data.length == 0) {
      return <ActivityIndicator size={'large'} color={colors.themeSecondary} style={styles.spinner} />;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={QuizStyle.headerContainer}>
          <View style={QuizStyle.headerBody} />
        </View>
        <View style={QuizStyle.questionContainer}>
          <View style={QuizStyle.thirdQuestionBox}></View>
          <View style={QuizStyle.secondQuestionBox}></View>
          <View style={QuizStyle.questionBox}>
            <Text style={styles.title}>{this.props.quiz.data[this.props.quiz.counter].category}</Text>
            <Text style={QuizStyle.question}>{this.props.quiz.data[this.props.quiz.counter].question}</Text>
            <Text style={styles.subTitle}>
              {this.props.quiz.counter + 1} of {this.props.quiz.data.length}
            </Text>
          </View>
        </View>
        <View style={QuizStyle.buttonsContainer}>
          <TouchableOpacity
            style={QuizStyle.trueButton}
            onPress={() => this.props.incrementResponseAction(true, this.props.quiz.data[this.props.quiz.counter].correct_answer.toLowerCase())}>
            <Image style={{ width: '60%', height: '60%' }} resizeMode={'stretch'} source={require('../assets/true.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={QuizStyle.falseButton}
            onPress={() => this.props.incrementResponseAction(false, this.props.quiz.data[this.props.quiz.counter].correct_answer.toLowerCase())}>
            <Image style={{ width: '55%', height: '55%' }} resizeMode={'stretch'} source={require('../assets/false.png')} />
          </TouchableOpacity>
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
