import { combineReducers } from 'redux';
import * as types from "./actionTypes";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  loggedIn: false,
  error: null
};
export const friends = (state = initialState, action) => {
  switch (action.type) {
    case (types.DELETE_FRIEND):
      return { ...state, deletingFriend: true };
    
    case (types.DELETE_FRIEND_FAILURE):
      return { ...state, error: action.payload, deletingFriend: false };
    
    case (types.DELETE_FRIEND_SUCCESS):
      return { friends: state.friends.filter(friend => friend.id !== action.payload), deletingFriend: false};
    
    case (types.SAVE_FRIEND):
      return { ...state, savingFriends: true };

    case (types.SAVE_FRIEND_SUCCESS):
      return { ...state, friends: state.friends.concat(action.payload), savingFriends: false };

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
      return state;

    case (types.UPDATE_FRIEND_FAILURE):
      return { ...state, error: action.payload, updatingFriend: false };;
    
    case (types.LOGIN):
      return { ...state, loggingIn: true };
    
    case (types.LOGIN_SUCCESS):
      return { ...state, loggedIn: true };

    case (types.LOGIN_FAILURE):
      return { ...state, error: action.payload, loggingIn: false };
  
    default:
      return state;
  }
};

export default combineReducers({
  friends
});
