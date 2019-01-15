/** 
 * A Reducer describes how an application's state changes. 
 * You’ll often see the Object Spread Operator (...) used inside of a reducer 
 * because a reducer must return a new object instead of mutating the old state. 
 * If you need a refresher on the spread operator, check out this ES6 lesson.
 */

import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.authedUser
    default:
      return state
  }
}