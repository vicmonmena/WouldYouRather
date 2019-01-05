import { showLoading, hideLoading } from 'react-redux-loading'
import { getUsers } from '../utils/api';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

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
  return (dispatch) => {  
    dispatch(showLoading())
    return getUsers()
      .then((users) => {
        const authedUser = Object.values(users).find((user) => (user.id === id))
        dispatch(setAuthedUser(authedUser))
        dispatch(hideLoading())
      })
  }
}

