import React from 'react'
import pageNotFound from '../images/404.jpeg';

const PageNotFound = () => {
  return(
    <div className='container-404'>
      <div>
        <img src={pageNotFound} alt='Page not found' />
      </div>
    </div>
  )
}

export default PageNotFound