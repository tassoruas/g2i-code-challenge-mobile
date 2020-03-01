import * as types from '../types/quizTypes';
import QuizData from '../../helpers/dataTypes/QuizData';
import { difficulty } from '../../helpers/dataTypes/QuizDifficulty';

export const addDataAction = (data: Array<QuizData>) => ({
  type: types.ADD_DATA,
  payload: data
});

export const incrementResponseAction = (response: boolean, correctAnswer: string) => ({
  type: types.INCREMENT_RESPONSE,
  payload: { response, correctAnswer }
});

export const changeDifficultyAction = (difficulty: difficulty) => ({
  type: types.CHANGE_DIFFICULTY,
  payload: difficulty
});

export const restartAction = () => ({
  type: types.RESTART
});
