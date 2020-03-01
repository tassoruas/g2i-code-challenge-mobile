import { QuizActions } from '../types/quizTypes';
import * as types from '../types/quizTypes';
import NavigationService from '../../helpers/NavigationService';
import { difficulty } from '../../helpers/dataTypes/QuizDifficulty';

const INITIAL_STATE = {
  answersCount: 10,
  correctAnswers: [],
  counter: 0,
  data: [],
  difficulty: difficulty.hard
};

const quizReducer = (state = INITIAL_STATE, action: QuizActions) => {
  switch (action.type) {
    case types.ADD_DATA:
      return { ...state, data: action.payload };
    case types.CHANGE_DIFFICULTY:
      return { ...state, difficulty: action.payload };
    case types.RESTART:
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
      state.correctAnswers = [...state.correctAnswers, true];
    } else {
      state.correctAnswers = [...state.correctAnswers, false];
    }
  }
  if (state.counter == state.answersCount - 1) {
    NavigationService.navigate('Results');
  } else {
    state.counter++;
  }
  return state;
}
