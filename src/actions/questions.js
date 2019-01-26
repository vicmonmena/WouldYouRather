import { showLoading, hideLoading } from 'react-redux-loading'
import { getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

/**
 * TODO: Action types should be separated from action creators for the following reasons:
 * 
 * easier import/export,
 *'self-documenting' actions; another dev reading the file can instantly understand how state is being handled.
 * A separate file could be created (e.g. actionTypes.js) to hold the action types.
 * 
 */


/**
 * This is an ACTION CREATOR
 *
 * @export
 * @returns
 */
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleReceiveQuestions() {
  return (dispatch) => {  
    dispatch(showLoading())
    return getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

/**
 * This is an ACTION CREATOR
 *
 * @returns
 */
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

/**
 * TODO: When writing async code in a production environment, keep in mind that the server might respond with an error.
 * 
 * Due to its nature, asynchronous code should always be written with robust error-management and tested.
 * 
 * Here are a few resources to get you started:
 * 
 * https://egghead.io/lessons/javascript-redux-displaying-error-messages
 * https://stackoverflow.com/questions/34403269/what-is-the-best-way-to-deal-with-a-fetch-error-in-react-redux
 * In the link to StackOverflow above, read the accepted answer as well as Dan Abramov's answer below it.
 */

/**
 * Asynchronous action creator
 * @param {string} optionOneText 
 * @param {string} optionTwoText
 */
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion( {
      optionOneText,
      optionTwoText,
      author: authedUser.id
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleAddQuestion: ', e)
        // TODO: change alert by modal
        alert('There wasn an error adding question. Try again.')
      })
  }
}

/**
 * This is an ACTION CREATOR
 *
 * @returns
 */
function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

/**
 * Asynchronous action creator
 * @param {string} qid 
 * @param {string} answer
 */
export function handleQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    const info = {
      authedUser: authedUser.id,
      qid,
      answer,
    }
    return saveQuestionAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleQuestionAnswer: ', e)
        // TODO: change alert by modal
        alert('There wasn an error answering question. Try again.')
      })
  }
}