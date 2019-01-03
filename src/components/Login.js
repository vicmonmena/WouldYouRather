import React, { Component } from 'react'
import logo from '../logo.svg';

class Login extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>Login page</p>
      </div>
    )
  }
}

export default Login