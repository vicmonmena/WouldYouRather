/** 
 * A Reducer describes how an application's state changes. 
 * You’ll often see the Object Spread Operator (...) used inside of a reducer 
 * because a reducer must return a new object instead of mutating the old state. 
 * If you need a refresher on the spread operator, check out this ES6 lesson.
 */

import { RECEIVE_USERS, ADD_ANSWER } from '../actions/users';

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER :
      console.log('REDUCER::ADD_ANSWER::users::state: ', state)
      const { authedUser, qid, answer } = action
      console.log('REDUCER::ADD_ANSWER::users::action: ', action)
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
      console.log('REDUCER::ADD_ANSWER::users::response: ', response)
      return response
    default:
      return state;
  }
}