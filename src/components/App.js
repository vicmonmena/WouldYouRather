import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import NewPoll from './NewPoll'
import Poll from './Poll'
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'

class App extends Component {

  componentDidMount() {
    // Load users list
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading, authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar className="loading"/>
          <div className='App'>
            <Nav />
            { loading === true 
              ? null
              : authedUser === ''
                ? <Route path='/' exact component={Login} />
                : loading === true 
                  ? null
                  : <div>
                      <Switch>
                        <Route path='/home' exact component={Home} />
                        <Route path='/question/:id' component={Poll} />
                        <Route path='/add' component={NewPoll} />
                        <Route path='/leaderboard' component={LeaderBoard} />
                        <Route component={PageNotFound} />
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
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)