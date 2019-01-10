import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleLogoutUser } from './../actions/shared'
import { withRouter } from 'react-router-dom'
class Nav extends Component {

  handleLogout = (event) => {
    event.preventDefault()
    this.props.dispatch(handleLogoutUser())
    this.props.history.push("/");
  }

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
            <NavLink to='/add' activeClassName='active'>
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
                <button onClick={this.handleLogout}>
                  Logout
                </button>
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

export default withRouter(connect(mapStateToProps)(Nav))