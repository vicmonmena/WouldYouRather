export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';


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