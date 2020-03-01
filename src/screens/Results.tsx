'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationParams } from 'react-navigation';

// Redux
import { connect } from 'react-redux';
import { restartAction } from '../redux/actions/quizActions';

// Components
import ResultList from '../components/ResultList';
import GenericButton from '../components/GenericButton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

// Styles
import colors from '../helpers/colors';
import SharedStyles, { ResultsStyle } from './styles';

interface Props {
  navigation: NavigationParams;
  quiz: any;
  restartAction: Function;
}

class Results extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  correctAnswersCounter() {
    return { correct: this.props.quiz.correctAnswers.filter(item => item == true).length, total: this.props.quiz.correctAnswers.length };
  }

  render() {
    const answers = this.correctAnswersCounter();
    return (
      <View style={ResultsStyle.container}>
        <View style={ResultsStyle.header}>
          <Text style={[SharedStyles.title, { color: '#fff', fontSize: 25 }]}>Result</Text>
        </View>
        <View style={ResultsStyle.body}>
          <AnimatedCircularProgress
            size={150}
            width={16}
            duration={1500}
            fill={(answers.correct / answers.total) * 100}
            tintColor={colors.themePrimary}
            backgroundColor="#3d5875">
            {fill => <Text style={[SharedStyles.title, { fontSize: 28 }]}>{(answers.correct / answers.total) * 100}%</Text>}
          </AnimatedCircularProgress>
          <ResultList style={ResultsStyle.resultList} data={this.props.quiz.data} correctAnswers={this.props.quiz.correctAnswers} iconSize={32} />
          <GenericButton
            height={'5%'}
            width={'60%'}
            textSize={18}
            text="PLAY AGAIN?"
            onPress={() => {
              setTimeout(() => this.props.restartAction(), 200);
              this.props.navigation.navigate('Home');
            }}
            color={colors.themePrimary}
          />
        </View>
      </View>
    );
  }
}

const mapState = state => ({
  quiz: state.quiz
});

const mapDispatch = {
  restartAction
};

export default connect(mapState, mapDispatch)(Results);
