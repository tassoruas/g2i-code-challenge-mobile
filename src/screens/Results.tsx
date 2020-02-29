'use strict';
import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { NavigationParams } from 'react-navigation';

// Redux
import { connect } from 'react-redux';

// Components
import ResultList from '../components/ResultList';
import GenericButton from '../components/GenericButton';

// Styles
import colors from '../helpers/colors';
import styles from './styles';

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
      <ImageBackground style={styles.imageBackground} imageStyle={{ opacity: 0.3 }} source={require('../assets/backgroundTexture.jpg')}>
        <View style={styles.container}>
          <Text style={styles.title}>You scored</Text>
          <Text style={styles.subTitle}>{this.correctAnswersCounter()}</Text>
          <ResultList style={styles.resultList} data={this.props.quiz.data} correctAnswers={this.props.quiz.correctAnswers} iconSize={32} />
          <GenericButton
            height={'10%'}
            width={'60%'}
            textSize={18}
            text="PLAY AGAIN?"
            onPress={() => this.props.navigation.navigate('Home')}
            color={colors.midGray}
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

export default connect(mapState, null)(Results);
