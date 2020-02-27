import * as types from '../types/quizTypes';
import QuizData from '../../helpers/types/QuizData';

export const addDataAction = (data: Array<QuizData>) => ({
  type: types.ADD_DATA,
  payload: data
});

export const addScoreAction = (score: number) => ({
  type: types.ADD_SCORE,
  payload: score
});

export const incrementResponseAction = (response: boolean, correctAnswer: string) => ({
  type: types.INCREMENT_RESPONSE,
  payload: { response, correctAnswer }
});

export const resetScoreAction = () => ({
  type: types.RESET_SCORE
});
