import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    const { authedUser } = this.props
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
          { authedUser === undefined
            ? null
            : <li>
                <div>
                  Hello, {authedUser.name}
                </div>
              </li>
          }
          { authedUser === undefined 
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

const mapStateToProps = ({ authedUser }) => ({ authedUser })

export default connect(mapStateToProps)(Nav)