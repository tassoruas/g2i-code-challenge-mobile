'use strict';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './componentStyles';

interface Props {
  text: string;
  isVisible: boolean;
  showActivityIndicator?: boolean;
}

export default class GenericModal extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.modalViewNoConnection}>
          <Text style={styles.modalTitle}>{this.props.text}</Text>
          {this.props.showActivityIndicator == true ? <ActivityIndicator /> : null}
        </View>
      </Modal>
    );
  }
}
