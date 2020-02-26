'use strict';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import colors from '../helpers/colors';

type Props = {
  trueOrFalse: boolean;
  trueIcon?: string;
  falseIcon?: string;
  trueColor?: string;
  falseColor?: string;
  iconSize?: number;
};

class ConditionalIconText extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.trueOrFalse == true ? (
      <AntDesign name={this.props.trueIcon || 'checkcircle'} size={this.props.iconSize || 16} color={this.props.trueColor || colors.green} />
    ) : (
      <AntDesign name={this.props.falseIcon || 'closecircle'} size={this.props.iconSize || 16} color={this.props.falseColor || colors.red} />
    );
  }
}

export default ConditionalIconText;
