import { combineReducers } from 'redux';
import * as types from "./actionTypes";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};
export const friends = (state = initialState, action) => {
  switch (action.type) {
    case (types.DELETE_FRIEND):
      return state;
    
    case (types.DELETE_FRIEND_FAILURE):
      return state;
    
    case (types.DELETE_FRIEND_SUCCESS):
      return state;
    
    case (types.SAVE_FRIEND):
      return state;

    case (types.SAVE_FRIEND_SUCCESS):
      return state;

    case (types.SAVE_FRIEND_FAILURE):
      return state;
    
    case (types.ADD_FRIENDS):
      return state;
    
    case (types.ADD_FRIENDS_SUCCESS):
      return state;

    case (types.ADD_FRIENDS_FAILURE):
      return state;

    case (types.UPDATE_FRIEND):
      return state;

    case (types.UPDATE_FRIEND_SUCCESS):
      return state;

    case (types.UPDATE_FRIEND_FAILURE):
      return state;
    
    case (types.LOGIN):
      return state;
    
    case (types.LOGIN_SUCCESS):
      return state;

    case (types.LOGIN_FAILURE):
      return state;
  
    default:
      return state;
  }
};

export default combineReducers({
  friends
});
