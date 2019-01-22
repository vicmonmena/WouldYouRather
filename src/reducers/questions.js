/** 
 * A Reducer describes how an application's state changes. 
 * You’ll often see the Object Spread Operator (...) used inside of a reducer 
 * because a reducer must return a new object instead of mutating the old state. 
 * If you need a refresher on the spread operator, check out this ES6 lesson.
 */

import { RECEIVE_QUESTIONS, QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions';

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case QUESTION_ANSWER :
      const { authedUser, qid, answer } = action
      const response = {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
      return response
    default:
      return state;
  }
}