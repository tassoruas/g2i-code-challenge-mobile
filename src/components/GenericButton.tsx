'use strict';
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './componentStyles';

interface Props {
  onPress: any;
  color: string;
  text: string;
  disabled?: boolean;
}
export default class GenericButton extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableHighlight
        underlayColor={'transparent'}
        style={[styles.genericButton, { backgroundColor: this.props.color }]}
        onPress={this.props.onPress}
        disabled={this.props.disabled || false}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
