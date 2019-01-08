export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
 * This is an ACTION CREATOR
 *
 * @export
 * @returns
 */
export function setAuthedUser(user) {
  console.log('setAuthedUser: ', user)
  return {
    type: SET_AUTHED_USER,
    authedUser: user,
  }
}