import QuizData from '../../helpers/dataTypes/QuizData';
import { difficulty } from '../../helpers/dataTypes/QuizDifficulty';

export const ADD_DATA = 'ADD_DATA';
interface addDataAction {
  type: typeof ADD_DATA;
  payload: Array<QuizData>;
}

export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
interface changeDifficultyAction {
  type: typeof CHANGE_DIFFICULTY;
  payload: difficulty;
}

export const INCREMENT_RESPONSE = 'INCREMENT_RESPONSE';
interface incrementResponse {
  type: typeof INCREMENT_RESPONSE;
  payload: { response: boolean; correctAnswer: string };
}

export const RESTART = 'RESTART';
interface restartAction {
  type: typeof RESTART;
}

export type QuizActions = addDataAction | changeDifficultyAction | incrementResponse | restartAction;
