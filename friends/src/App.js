import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';
import Friends from './components/Friends';

const StyledNavLinks = styled(NavLink)`
  padding: 1rem 2rem;
  margin: .5rem;
  display: inline-block;
  text-decoration: none;
  color: white;
  background: rgb(161,21,29);
`;

function App() {
  return (
    <BrowserRouter>
      <div>
        <StyledNavLinks to='/'>Home</StyledNavLinks>
        <StyledNavLinks to='/login'>Login</StyledNavLinks>
        
        <Route 
          exact
          path='/login'
          component={Login}
        />
        <Friends />
      </div>
    </BrowserRouter>
  );
}

export default App;
