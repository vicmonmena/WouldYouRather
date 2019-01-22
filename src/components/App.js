import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import PrivateRoute from './PrivateRoute'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import NewPoll from './NewPoll'
import Poll from './Poll'
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

class App extends Component {

  componentDidMount() {
    // Load users list
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    const { loading } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar className="loading"/>
          <div className='App'>
            <Nav auth={fakeAuth}/>
            { loading === true 
              ? null
              : <div>
                  <Switch>
                    <Route path='/' exact render={(props) => (<Login auth={fakeAuth} {...props}/>)} />
                    <PrivateRoute auth={fakeAuth} path='/home' exact component={Home} />
                    <PrivateRoute auth={fakeAuth} path='/question/:id' component={Poll} />
                    <PrivateRoute auth={fakeAuth} path='/add' exact component={NewPoll} />
                    <PrivateRoute auth={fakeAuth} path='/leaderboard' exact component={LeaderBoard} />
                    <Route component={PageNotFound}/>
                  </Switch>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

/**
 * Adding loading property to App component. 
 * It allows to render UI just when initial data (list of users) have been loaded.
 * It requires to hook our component by using "connect".
 * @param {*} users
 */
const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)