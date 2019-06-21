import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { removeFriend, saveFriend, fetchFriends, addOneFriend } from "../redux/actionCreators";
import Friend from './Friend';

const StyledFriends = styled.div`
  max-width: 30rem;
  margin: 0 auto;
`

export class Friends extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    const { friends, removeFriend } = this.props;
    return (
      <StyledFriends>
        {
          friends.map(friend => 
          <Friend
            key={friend.id}
            friend={friend}
            removeFriend={removeFriend}
          />)
        }
      </StyledFriends>
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