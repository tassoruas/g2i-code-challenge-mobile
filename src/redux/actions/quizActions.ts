import * as types from '../types/quizTypes';
import QuizData from '../../helpers/dataTypes/QuizData';

export const addDataAction = (data: Array<QuizData>) => ({
  type: types.ADD_DATA,
  payload: data
});

export const incrementResponseAction = (response: boolean, correctAnswer: string) => ({
  type: types.INCREMENT_RESPONSE,
  payload: { response, correctAnswer }
});

export const restartAction = () => ({
  type: types.RESTART
});
