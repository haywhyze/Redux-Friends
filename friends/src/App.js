import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter, NavLink, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { signOutUser } from './redux/actionCreators';
import Login from './components/Login';
import Friends from './components/Friends';
import NewFriendForm from './components/NewFriendForm';


const FreindsContainer = styled.div`
  text-align: center;
`

const StyledNavLinks = styled(NavLink)`
  padding: 1rem 2rem;
  margin: .5rem;
  display: inline-block;
  text-decoration: none;
  color: white;
  background: rgb(161,21,29);
`;

export class App extends React.Component {

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem("userToken") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );

    return (
      <BrowserRouter>
        <FreindsContainer>
          <StyledNavLinks to='/'>Home</StyledNavLinks>
          {this.props.loggedIn && <StyledNavLinks to='/add-friend'>Add New Friend</StyledNavLinks>}
          {this.props.loggedIn && <StyledNavLinks onClick={this.props.signOutUser} to='/login'>Logout</StyledNavLinks>}
          
          <Route 
            exact
            path='/login'
            component={Login}
          />
          
          <PrivateRoute 
            exact path="/" 
            component={Friends} 
          />

          <PrivateRoute
            exact
            path='/add-friend'
            component={NewFriendForm}
          />

        </FreindsContainer>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.friends.loggedIn,
  };
}

export default connect(
  mapStateToProps,
  {
    signOutUser
  }
)(App);