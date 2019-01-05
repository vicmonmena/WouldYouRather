export const RECEIVE_USERS = 'RECEIVE_USERS';

/**
 * This is an ACTION CREATOR
 *
 * @export
 * @returns
 */
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}