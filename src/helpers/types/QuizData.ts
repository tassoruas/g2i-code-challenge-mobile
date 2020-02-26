export default class QuizData {
  category: string;
  type: boolean;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}
