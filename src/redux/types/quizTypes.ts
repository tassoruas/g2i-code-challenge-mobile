import QuizData from '../../helpers/types/QuizData';

export const ADD_DATA = 'ADD_DATA';
interface addDataAction {
  type: typeof ADD_DATA;
  payload: Array<QuizData>;
}

export const ADD_SCORE = 'ADD_SCORE';
interface addScoreAction {
  type: typeof ADD_SCORE;
  payload: number;
}

export const INCREMENT_RESPONSE = 'INCREMENT_RESPONSE';
interface incrementResponse {
  type: typeof INCREMENT_RESPONSE;
  payload: { response: boolean; correctAnswer: string };
}

export const RESET_SCORE = 'RESET_SCORE';
interface resetScoreAction {
  type: typeof RESET_SCORE;
}

export type QuizActions = addDataAction | addScoreAction | incrementResponse | resetScoreAction;
