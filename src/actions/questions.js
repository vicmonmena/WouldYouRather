import { showLoading, hideLoading } from 'react-redux-loading'
import { getQuestions, saveQuestion } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

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
export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}