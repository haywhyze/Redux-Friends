import axios from 'axios';
import * as types from './actionTypes';

export const deleteFriendSuccess = (id) => {
  return {
    type: types.DELETE_FRIEND_SUCCESS,
    payload: id,
  };
} 

export const deleteFriendFailed = () => {
  return {
    type: types.DELETE_FRIEND_FAILURE,
  };
} 

export const deleteFriend = () => {
  return {
    type: types.DELETE_FRIEND,
  };
} 

export const saveFriendSuccess = (friends) => {
  return {
    type: types.SAVE_FRIEND_SUCCESS,
    payload: friends
  }
}

export const saveFriendFailed = () => {
  return {
    type: types.SAVE_FRIEND_FAILURE,
  };
} 

export const saveFriend = () => {
  return {
    type: types.SAVE_FRIEND,
  };
} 

export const addFriendsSuccess = (friends) => {
  return {
    type: types.ADD_FRIENDS_SUCCESS,
    payload: friends
  }
}

export const addFriendsFailed = () => {
  return {
    type: types.ADD_FRIENDS_FAILURE,
  }
}

export const addFriends = () => {
  return {
    type: types.ADD_FRIENDS,
  }
}

export const login = () => {
  return {
    type: types.LOGIN,
  }
}

export const loginFailed = () => {
  return {
    type: types.LOGIN_FAILURE,
  }
}

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
  }
}

export const fetchFriends = () => dispatch => {
  dispatch(addFriends())
  axios.get('http://localhost:5000')
    .then(res => {
      dispatch(addFriendsSuccess(res.data));
    })
    .catch(error => {
      dispatch(addFriendsFailed(error.message));
    });
};

export const removeFriend = (id) => dispatch => {
  dispatch(deleteFriend())
  axios.delete('http://localhost:5000', id)
    .then(res => {
      dispatch(deleteFriendSuccess(res.data));
    })
    .catch(error => {
      dispatch(deleteFriendFailed(error.message));
    });
};

export const addOneFriend = (friend) => dispatch => {
  dispatch(saveFriend())
  axios.post('http://localhost:5000', friend)
    .then(res => {
      dispatch(saveFriendSuccess(res.data));
    })
    .catch(error => {
      dispatch(saveFriendFailed(error.message));
    });
};

export const loginUser = (credentials) => dispatch => {
  dispatch(login())
  axios.post('http://localhost:5000', credentials)
    .then(res => {
      dispatch(loginSuccess(res.data));
    })
    .catch(error => {
      dispatch(loginFailed(error.message));
    });
};