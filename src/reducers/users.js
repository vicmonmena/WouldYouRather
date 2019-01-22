/** 
 * A Reducer describes how an application's state changes. 
 * You’ll often see the Object Spread Operator (...) used inside of a reducer 
 * because a reducer must return a new object instead of mutating the old state. 
 * If you need a refresher on the spread operator, check out this ES6 lesson.
 */

import { RECEIVE_USERS, ADD_QUESTION, QUESTION_ANSWER } from '../actions/users';

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_QUESTION :
    {
      const { question } = action
      return  {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    }
    case QUESTION_ANSWER :
      const { authedUser, qid, answer } = action
      // Updating state: authedUser and user/authedUser in users array
      const response = {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
      return response
    default:
      return state;
  }
}