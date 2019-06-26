import React, { Component } from 'react'
import { connect } from "react-redux";
import styled from 'styled-components';
import { fetchFriends, addOneFriend } from "../redux/actionCreators";

const StyledForm = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

const StyledInput = styled.input`
  display: block;
  margin: .5rem auto;
  padding: .5rem 1rem;
  border: none;
  border-bottom: 2px solid rgba(0, 49, 116, .5);
  width: 15rem;
  box-shadow: 0 0 20px rgba(0,0,0, .1);

  &:focus, &:active {
    outline: none;
    border-bottom: 2px solid rgba(0, 49, 116, .9);
  }
`

const StyledButton = styled.button`
  padding: .75rem 1.5rem;
  background: rgb(161, 21, 29);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0,0,0, .1);
  border-radius: .4rem;
`

export class NewFriendForm extends Component {

  state = {
    name: '',
    age: '',
    email: '',
  }

  addNewFriend = (e) => {
    e.preventDefault();
    const {name, age, email} = this.state;
    if (!name || !age || !email) return;
    this.props.addOneFriend(this.state, this.props.history);
  }

  handleChange = input => event => {
    this.setState({
      [input]: event.target.value 
    })
  }

  render() {
    return (
      <div>
        {this.props.isLoading && (<p>...Loading</p>)}
        <h1>Add New Friend</h1>
        <StyledForm onSubmit={this.addNewFriend}>
          <StyledInput 
            type='text' 
            value={this.state.name} 
            onChange={this.handleChange('name')} 
            placeholder='Name'
          />
          <StyledInput 
            type='number' 
            value={this.state.age} 
            onChange={this.handleChange('age')} 
            placeholder='Age'
          />
          <StyledInput 
            type='email' 
            value={this.state.email} 
            onChange={this.handleChange('email')} 
            placeholder='Email'
          />
          <StyledButton onClick={this.addNewFriend}>
            Add New Friend
          </StyledButton>
        </StyledForm>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
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
    fetchFriends,
    addOneFriend
  }
)(NewFriendForm);