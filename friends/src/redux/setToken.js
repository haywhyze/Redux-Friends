import { LOGIN_SUCCESS } from './actionTypes';

export const setToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};
