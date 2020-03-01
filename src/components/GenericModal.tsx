'use strict';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import styles from './componentStyles';
import colors from '../helpers/colors';

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
      <Modal style={{ elevation: 20 }} isVisible={this.props.isVisible}>
        <View style={styles.modalViewNoConnection}>
          <Text style={styles.modalText}>{this.props.text}</Text>
          {this.props.showActivityIndicator == true ? <ActivityIndicator size={'large'} color={colors.themeSecondary} /> : null}
        </View>
      </Modal>
    );
  }
}
