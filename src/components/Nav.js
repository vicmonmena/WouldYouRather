import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

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
          { this.props.loggedIn !== undefined &&
            <li>
              <div>
                Hello, {this.props.loggedIn}
              </div>
            </li>
          }
          { this.props.loggedIn !== undefined &&
            <li>
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

export default Nav