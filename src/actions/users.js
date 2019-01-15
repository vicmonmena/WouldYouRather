export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';


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

/**
 * This is an ACTION CREATOR
 *
 * @returns
 */
export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer
  }
}