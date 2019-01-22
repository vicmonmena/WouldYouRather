import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateRoute = ({ auth, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log('Checking isAuthenticated: ', auth.isAuthenticated )
    return (auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />)
  }} />
)

export default PrivateRoute