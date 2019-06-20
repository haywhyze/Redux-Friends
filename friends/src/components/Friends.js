import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeFriend, saveFriend, fetchFriends, addOneFriend } from "../redux/actionCreators";

export class Friends extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    const { friends } = this.props;
    return (
      <div>
        {
          friends.map(friend => <p key={friend.id}>{friend.name}</p>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deletingFriend: state.friends.deletingFriend,
    fetchingFriends: state.friends.fetchingFriends,
    friends: state.friends.friends,
    savingFriends: state.friends.savingFriends,
    updatingFriend: state.friends.updatingFriend,
    error: state.friends.error
  };
}

export default connect(
  mapStateToProps,
  {
    removeFriend,
    saveFriend,
    fetchFriends,
    addOneFriend
  }
)(Friends);