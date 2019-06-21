import React from 'react';
import { connect } from "react-redux";
import { loginUser } from "../redux/actionCreators";
import { LoginStyled } from './LoginStyles';

export class Login extends React.Component {
  userRef = React.createRef()
  passRef = React.createRef()

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;

    this.props.loginUser({ username, password }, this.props.history);
  }

  render() {
    console.log(this.props);
    return (
      <LoginStyled>
        <div className='login-container'>
          <h3>Login</h3>
          <input type="text" ref={this.userRef} placeholder='Username' />
          <input type="password" ref={this.passRef} placeholder='Password' />

          <button onClick={this.onLogin}>Log in</button>
        </div>
      </LoginStyled>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    loggingIn: state.friends.loggingIn,
    loggedIn: state.friends.loggedIn,
    error: state.friends.error
  };
}

export default connect(
  mapStateToProps,
  {
    loginUser,
  }
)(Login);
