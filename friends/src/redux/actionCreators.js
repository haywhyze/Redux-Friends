import axios from 'axios';
import axiosWithToken from '../axios';
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

export const loginSuccess = (token) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: token
  }
}

export const signOut = () => {
  return {
    type: types.SIGNOUT,
  }
}

export const fetchFriends = () => dispatch => {
  dispatch(addFriends())
  axiosWithToken().get('http://localhost:5000/api/friends')
    .then(res => {
      dispatch(addFriendsSuccess(res.data));
    })
    .catch(error => {
      dispatch(addFriendsFailed(error.message));
    });
};

export const removeFriend = (id) => dispatch => {
  dispatch(deleteFriend())
  axiosWithToken().delete(`http://localhost:5000/api/friends/${id}`, id)
    .then(res => {
      dispatch(deleteFriendSuccess(res.data));
    })
    .catch(error => {
      dispatch(deleteFriendFailed(error.message));
    });
};

export const addOneFriend = (friend, history) => dispatch => {
  dispatch(saveFriend())
  axiosWithToken().post('http://localhost:5000/api/friends', friend)
    .then(res => {
      dispatch(saveFriendSuccess(res.data));
      history.push('/');
    })
    .catch(error => {
      dispatch(saveFriendFailed(error.message));
    });
};

export const loginUser = (credentials, history) => dispatch => {
  dispatch(login())
  axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      dispatch(loginSuccess(res.data.payload));
      history.push('/');
    })
    .catch(error => {
      console.log(error.message)
      dispatch(loginFailed(error.message));
    });
};

export const signOutUser = () => dispatch => {
  dispatch(signOut());
}