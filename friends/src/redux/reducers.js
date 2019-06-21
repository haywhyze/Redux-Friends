import { combineReducers } from 'redux';
import * as types from "./actionTypes";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  loggedIn: localStorage.getItem('userToken') ? true : false,
  error: null
};
export const friends = (state = initialState, action) => {
  switch (action.type) {
    case (types.DELETE_FRIEND):
      return { ...state, deletingFriend: true };
    
    case (types.DELETE_FRIEND_FAILURE):
      return { ...state, error: action.payload, deletingFriend: false };
    
    case (types.DELETE_FRIEND_SUCCESS):
      return { ...state, friends: action.payload, deletingFriend: false};
    
    case (types.SAVE_FRIEND):
      return { ...state, savingFriends: true };

    case (types.SAVE_FRIEND_SUCCESS):
      return { ...state, friends: action.payload, savingFriends: false };

    case (types.SAVE_FRIEND_FAILURE):
      return { ...state, error: action.payload, savingFriends: false };
    
    case (types.ADD_FRIENDS):
      return { ...state, fetchingFriends: true };
    
    case (types.ADD_FRIENDS_SUCCESS):
      return { ...state, friends: action.payload, fetchingFriends: false };

    case (types.ADD_FRIENDS_FAILURE):
      return { ...state, error: action.payload, fetchingFriends: false };

    case (types.UPDATE_FRIEND):
      return { ...state, updatingFriend: true };

    case (types.UPDATE_FRIEND_SUCCESS):
      return { ...state, friends: action.payload, updatingFriend: false };

    case (types.UPDATE_FRIEND_FAILURE):
      return { ...state, error: action.payload, updatingFriend: false };;
    
    case (types.LOGIN):
      return { ...state, loggingIn: true };
    
    case (types.LOGIN_SUCCESS):
      return { ...state, loggedIn: true, loggingIn: false };

    case (types.LOGIN_FAILURE):
      return { ...state, error: action.payload, loggingIn: false };

    case (types.SIGNOUT):
      return { ...state, loggedIn: false }
  
    default:
      return state;
  }
};

export default combineReducers({
  friends
});
