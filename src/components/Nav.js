import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogoutUser } from './../actions/shared'
import { withRouter } from 'react-router-dom'
class Nav extends Component {

  // TODO: event.preventDefault is only necessary if the event handler is called from a tag nested within the <form> tag
  handleLogout = (event) => {
    event.preventDefault()
    const { dispatch, auth, history } = this.props
    dispatch(handleLogoutUser())
    auth.signout(() => history.push('/'))
  }

  render() {
    const { authedUser, auth } = this.props 
    return (
      <nav className='nav'>
        <div className='nav-item'>
          <NavLink to='/home' className='navlink' activeClassName='active' >
            Home
          </NavLink>
        </div>    
        <div className='nav-item'>
          <NavLink to='/add' className='navlink' activeClassName='active' >
            New Question
          </NavLink>
        </div>
        <div className='nav-item'>
          <NavLink to='/leaderboard' className='navlink' activeClassName='active'>
            Leader Board
          </NavLink>
        </div>
        { !(auth.isAuthenticated) || !(authedUser)
          ? null
          : <div className='nav-item inactive'>
              <div>Hello,</div>
              <div className='username'>{authedUser.name}</div>
              <div className='navatar'>
                <img 
                  src={authedUser.avatarURL}
                  alt={`Avatar of ${authedUser.name}`}
                />
              </div>
            </div>
        }
        { !(auth.isAuthenticated) || !(authedUser)
          ? null 
          : <div className='nav-item'>
              <button onClick={this.handleLogout}>
                Logout
              </button>
            </div>
        }
      </nav>
    )
  }
} 

const mapStateToProps = ({ authedUser }) => (
  { 
    authedUser 
  }
)

export default withRouter(connect(mapStateToProps)(Nav))