'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './screenStyles';
import { NavigationParams } from 'react-navigation';
import ResultList from '../components/ResultList';
import QuizData from '../helpers/types/QuizData';
import GenericButton from '../components/GenericButton';
import colors from '../helpers/colors';

type Props = {
  navigation: NavigationParams;
};

type State = {
  data: Array<QuizData>;
  correctAnswers: Array<boolean>;
};

class Results extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      correctAnswers: this.props.navigation.state.params.correctAnswers
    };
  }

  correctAnswersCounter() {
    return this.state.correctAnswers.filter(item => item == true).length + '/' + this.state.correctAnswers.length;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You scored</Text>
        <Text style={styles.subTitle}>{this.correctAnswersCounter()}</Text>
        <ResultList style={styles.resultList} data={this.state.data} correctAnswers={this.state.correctAnswers} iconSize={32} />
        <GenericButton text="PLAY AGAIN?" onPress={() => this.props.navigation.navigate('Home')} color={colors.green} />
      </View>
    );
  }
}

export default Results;
