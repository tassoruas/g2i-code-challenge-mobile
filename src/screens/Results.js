import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data
    };
  }

  renderListItem({ item }) {
    return (
      <React.Fragment>
        <AntDesign name="checkcircle" size={32} color="green" />
        <Text>{item.question}</Text>
      </React.Fragment>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You scored</Text>
        <Text>3/10</Text>
        <FlatList data={this.state.data} renderItem={this.renderListItem} />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
          <Text>PLAY AGAIN?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Results;
