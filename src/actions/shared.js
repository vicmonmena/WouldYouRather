import { showLoading, hideLoading } from 'react-redux-loading'
import { getLoginData, getUsers, saveQuestionAnswer } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveQuestions, answerQuestion as qAnswerQuestion } from './questions';
import { receiveUsers, answerQuestion as uAnswerQuestion } from './users';

export function handleInitialData() {
  return (dispatch) => {  
    dispatch(showLoading())
    return getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(''))
        dispatch(hideLoading())
      })
  }
}

export function handleLoginUser(id) {
  return (dispatch) => {  
    dispatch(showLoading())
    return getLoginData()
      .then(({ users, questions }) => {
        const authedUser = Object.values(users).find((user) => (user.id === id))
        dispatch(setAuthedUser(authedUser))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleLogoutUser() {
  return (dispatch) => {  
    dispatch(showLoading())
    return new Promise(() => {
      dispatch(setAuthedUser(''))
      dispatch(hideLoading())
    })
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
      .then(() => dispatch(qAnswerQuestion(info)))
      .then(() => dispatch(uAnswerQuestion(info)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleQuestionAnswer: ', e)
        // TODO: change alert by modal
        alert('There wasn an error answering question. Try again.')
      })
  }
}