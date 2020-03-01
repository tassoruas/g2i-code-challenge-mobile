import * as types from '../types/quizTypes';
import QuizData from '../../helpers/dataTypes/QuizData';
import { difficulty } from '../../helpers/dataTypes/QuizDifficulty';

export const addDataAction = (data: Array<QuizData>) => ({
  type: types.ADD_DATA,
  payload: data
});

/**
 * Adds the user response and verifies that it's correct or not
 * @param response user response
 * @param correctAnswer correct answer set on data array
 */
export const incrementResponseAction = (response: boolean, correctAnswer: string) => ({
  type: types.INCREMENT_RESPONSE,
  payload: { response, correctAnswer }
});

/**
 * Changes difficulty level
 * @param difficulty
 */
export const changeDifficultyAction = (difficulty: difficulty) => ({
  type: types.CHANGE_DIFFICULTY,
  payload: difficulty
});

/**
 * Set the initial state to the quiz reducer
 */
export const restartAction = () => ({
  type: types.RESTART
});
