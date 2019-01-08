import { showLoading, hideLoading } from 'react-redux-loading'
import { getUsers } from '../utils/api';
import { getLoginData } from '../utils/api';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { receiveQuestions } from './questions';

export function handleInitialData() {
  return (dispatch) => {  
    dispatch(showLoading())
    return getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}

export function handleLoginUser(id) {
  console.log('handleLoginUser: ', id)
  return (dispatch) => {  
    dispatch(showLoading())
    return getLoginData()
      .then(({ users, questions }) => {
        const authedUser = Object.values(users).find((user) => (user.id === id))
        console.log('handleLoginUser::authedUser ', authedUser)
        dispatch(setAuthedUser(authedUser))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleLogoutUser() {
  console.log('handleLogoutUser')
  return (dispatch) => {  
    dispatch(showLoading())
    dispatch(setAuthedUser(null))
    dispatch(hideLoading())
  }
}