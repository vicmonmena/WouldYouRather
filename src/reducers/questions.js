/** 
 * A Reducer describes how an application's state changes. 
 * You’ll often see the Object Spread Operator (...) used inside of a reducer 
 * because a reducer must return a new object instead of mutating the old state. 
 * If you need a refresher on the spread operator, check out this ES6 lesson.
 */

import { RECEIVE_QUESTIONS, QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions';

/**
 * TODO: Data integrity within reducers can be further preserved with the use of ImmutableJS.
 * 
 * A library such as ImmutableJS is used to:
 * 
 * preserve data type integrity (which is useful given Javascript's dynamic nature,
 * increase the speed of applications tremendously with certain data types (up to 30% - 40% from personal testing. You can run your own tests with JSPerf)
 * Here are great resources to get you started:
 * 
 * https://redux.js.org/recipes/using-immutable.js-with-redux
 * https://www.toptal.com/react/react-redux-and-immutablejs
 * https://github.com/rogic89/ToDo-react-redux-immutable/blob/master/src/reducers/todos.js
 */
export default function questions (state = {}, action) {

  // TODO: Lexical declaration is visible in the entire switch block but it only gets initialized when it is assigned, which will only happen if the case where it is defined is reached.
  // Reference: https://eslint.org/docs/rules/no-case-declarations
  
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