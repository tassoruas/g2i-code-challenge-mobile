import { QuizActions } from '../types/quizTypes';
import * as types from '../types/quizTypes';
import NavigationService from '../../helpers/NavigationService';

const INITIAL_STATE = {
  answersCount: 10,
  bestScore: 0,
  correctAnswers: new Array(),
  counter: 0,
  data: new Array()
};

const STATE = JSON.parse(JSON.stringify(INITIAL_STATE));

const quizReducer = (state = STATE, action: QuizActions) => {
  switch (action.type) {
    case types.ADD_DATA:
      return { ...state, data: action.payload };
    case types.ADD_SCORE:
      return { ...state, bestScore: state.bestScore + action.payload };
    case types.RESET_SCORE:
      return INITIAL_STATE;
    case types.INCREMENT_RESPONSE:
      const { response, correctAnswer } = action.payload;
      const resp = incrementResponse({ response, correctAnswer }, state);
      return { ...state, ...resp };
    default:
      return state;
  }
};

export { quizReducer };

function incrementResponse(payload, state) {
  if (state.correctAnswers.length != state.answersCount) {
    if (String(payload.response) === payload.correctAnswer) {
      state.correctAnswers.push(true);
    } else {
      state.correctAnswers.push(false);
    }
  }
  if (state.counter == state.answersCount - 1) {
    NavigationService.navigate('Results');
  } else {
    state.counter++;
  }
  return state;
}
