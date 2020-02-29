import QuizData from '../../helpers/dataTypes/QuizData';

export const ADD_DATA = 'ADD_DATA';
interface addDataAction {
  type: typeof ADD_DATA;
  payload: Array<QuizData>;
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

export type QuizActions = addDataAction | incrementResponse | restartAction;
