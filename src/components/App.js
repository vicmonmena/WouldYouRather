import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { handleReceiveQuestions } from '../actions/questions'
import Nav from './Nav'
import Poll from './Poll'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import './App.css';

class App extends Component {

  componentDidMount() {
    // Load users list
    this.props.dispatch(handleInitialData())
    // this.props.dispatch(handleReceiveQuestions())
  }

  render() {
    const { loading } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='App'>
            <div className='title'>React app</div>
            <Nav />
            { loading === true 
              ? null
              : <div>
                  <Route path='/' exact component={Login} />
                  <Route path='/home' exact component={Home} />
                  <Route path='/question/:id' exact component={Poll} />
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
const mapStateToProps = ({ questions, users }) => {
  return {
    loading: questions === null
  }
}

export default connect(mapStateToProps)(App)