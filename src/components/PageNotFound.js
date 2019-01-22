import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import pageNotFound from '../images/404.jpeg';

class PageNotFound extends Component{

  componentDidMount() {
    setTimeout(() => {
      console.log('Redirecting to "/" ...')
      this.props.history.push('/')
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

export default withRouter(PageNotFound)