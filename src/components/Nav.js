import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogoutUser } from './../actions/shared'
class Nav extends Component {

  handleLogout = (event) => {
    event.preventDefault()
    this.props.dispatch(handleLogoutUser())
  }

  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/newquestion' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          { !(authedUser)
            ? null
            : <li>
                <div>
                  Hello, {authedUser.name}
                </div>
              </li>
          }
          { !(authedUser)
            ? null 
            : <li>
                <NavLink to='/' activeClassName='active'>
                  Logout
                </NavLink>
              </li>
          }
        </ul>
      </nav>
    )
  }
} 

const mapStateToProps = ({ authedUser }) => (
  { 
    authedUser 
  }
)

export default connect(mapStateToProps)(Nav)