import React from 'react';

export class Login extends React.Component {
  userRef = React.createRef()
  passRef = React.createRef()

  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>username <input type="text" ref={this.userRef} /></div>
        <div>password <input type="text" ref={this.passRef} /></div>

        <button onClick={this.onLogin}>Log in</button>
      </div>
    );
  }
}

