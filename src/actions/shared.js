import { showLoading, hideLoading } from 'react-redux-loading'
import { getLoginData, getUsers } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';

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