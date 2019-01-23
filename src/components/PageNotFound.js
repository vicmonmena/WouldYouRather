import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import pageNotFound from '../images/404.jpeg';

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