import { LOGIN_SUCCESS, SIGNOUT } from './actionTypes';

export const setToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
};

export const removeToken = store => next => action => {
  if (action.type === SIGNOUT) {
    localStorage.removeItem('userToken');
  }
  next(action);
};
