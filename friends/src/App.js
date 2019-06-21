import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
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

function App() {

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
        <StyledNavLinks to='/add-friend'>Add New Friend</StyledNavLinks>
        <StyledNavLinks to='/login'>Login</StyledNavLinks>
        
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

export default App;
