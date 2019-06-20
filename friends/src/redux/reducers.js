import { combineReducers } from 'redux';

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
  return state;
};

export default combineReducers({
  friends
});
