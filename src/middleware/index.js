import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

/** 
 * TODO: Redux Saga is a great alternative to Thunk with the following benefits:
 * 
 * you don't end up in callback hell,
 * asynchronous flows can be tested easily, and
 * actions stay pure
 * 
 *  https://github.com/redux-saga/redux-saga
 */


export default applyMiddleware(
  thunk,
  logger
)