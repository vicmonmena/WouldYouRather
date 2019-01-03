import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import './App.css';
import Login from './Login'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='App'>
            <div className='title'>React app</div>
            <Nav loggedIn='vicmonmena'/>
              <Route path='/' exact component={Login} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
