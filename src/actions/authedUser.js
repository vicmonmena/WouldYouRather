export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
 * This is an ACTION CREATOR
 *
 * @export
 * @returns
 */
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    authedUser: id,
  }
}