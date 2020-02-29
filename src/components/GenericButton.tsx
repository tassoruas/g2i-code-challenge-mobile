'use strict';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './componentStyles';

interface Props {
  onPress: any;
  color: string;
  text: string;
  disabled?: boolean;
  width?: any;
  height?: any;
  textSize?: number;
}
export default class GenericButton extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        style={[styles.genericButton, { backgroundColor: this.props.color, width: this.props.width, height: this.props.height }]}
        onPress={this.props.onPress}
        disabled={this.props.disabled || false}>
        <Text style={[styles.buttonText, { fontSize: this.props.textSize }]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
