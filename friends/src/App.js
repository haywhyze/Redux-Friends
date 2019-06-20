import React from 'react';
import { BrowserRouter, NavLink, Link, Route } from 'react-router-dom';
import {Login} from './components/Login';
import Friends from './components/Friends';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        
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
