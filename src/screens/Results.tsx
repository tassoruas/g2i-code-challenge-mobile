'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationParams } from 'react-navigation';

// Redux
import { connect } from 'react-redux';

// Components
import ResultList from '../components/ResultList';
import GenericButton from '../components/GenericButton';

// Styles
import colors from '../helpers/colors';
import styles from './screenStyles';

interface Props {
  navigation: NavigationParams;
  quiz: any;
}

class Results extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  correctAnswersCounter() {
    return this.props.quiz.correctAnswers.filter(item => item == true).length + '/' + this.props.quiz.correctAnswers.length;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You scored</Text>
        <Text style={styles.subTitle}>{this.correctAnswersCounter()}</Text>
        <ResultList style={styles.resultList} data={this.props.quiz.data} correctAnswers={this.props.quiz.correctAnswers} iconSize={32} />
        <GenericButton text="PLAY AGAIN?" onPress={() => this.props.navigation.navigate('Home')} color={colors.green} />
      </View>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

export default connect(mapState, null)(Results);
