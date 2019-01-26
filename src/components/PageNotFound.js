import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import pageNotFound from '../images/404.jpeg';

// TODO: Some links for refactoring and testing React's components:
// https://hackernoon.com/refactoring-react-components-7bf7d0a9521b
// https://8thlight.com/blog/josh-mccormick/2017/08/21/refactoring-react.html


class PageNotFound extends Component{

  componentDidMount() {
    setTimeout(() => {
      console.log('Redirecting to "/" ...')
      this.props.history.push(this.props.path)
    }, 
    5000)
  }
  render() {
    return(
      <div className='container-404'>
        <h2>You will be redirected in a moment ...</h2>
        <img src={pageNotFound} alt='Page not found' />
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  console.log('pagenotfound::mapStateToProps::authedUser: ', authedUser)
  return {
    path: (authedUser !== '' && authedUser !== null) ? '/home' : '/'
  }
}
export default withRouter(connect(mapStateToProps)(PageNotFound))