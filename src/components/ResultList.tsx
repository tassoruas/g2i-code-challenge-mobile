'use strict';
import React from 'react';
import { FlatList, Text, View, StyleProp, ViewStyle } from 'react-native';
import QuizData from '../helpers/dataTypes/QuizData';
import styles from './componentStyles';
import ConditionalIconText from './ConditionalIconText';

interface Props {
  correctAnswers: Array<boolean>;
  data: Array<QuizData>;
  iconSize: number;
  style: StyleProp<ViewStyle>;
}

class ResultList extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  renderListItem({ item, index }) {
    const answer = this.props.correctAnswers[index];
    return (
      <View style={styles.resultList}>
        <ConditionalIconText trueOrFalse={answer} iconSize={this.props.iconSize} />
        <Text style={{ marginLeft: 7, marginTop: 5, width: '90%' }}>{item.question}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={this.props.style}>
        <FlatList data={this.props.data} renderItem={this.renderListItem.bind(this)} keyExtractor={(item, index) => index.toString()} />
      </View>
    );
  }
}
export default ResultList;
