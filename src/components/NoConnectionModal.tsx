'use strict'
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './componentStyles';

interface Props {
  isVisible: boolean;
}

export default class NoConnectionModal extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal isVisible={this.props.isVisible}>
        <View style={styles.modalViewNoConnection}>
          <Text style={styles.modalTitle}>Oops... Seems like you are not connected to the internet</Text>
          <ActivityIndicator />
        </View>
      </Modal>
    );
  }
}
