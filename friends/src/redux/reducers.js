import { combineReducers } from 'redux';


const initialState = {
  friends: [],
};
export const friends = (state = initialState, action) => {
  return state;
};

export default combineReducers({
  friends
});
