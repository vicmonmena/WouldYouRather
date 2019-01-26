import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../logo.svg';
import { handleLoginUser } from '../actions/shared'

// TODO: RESOLVE: index.js:1446 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.

class Login extends Component {

  state = {
    redirectToReferrer: false,
    selectedUser: null,
    test: false,
  }

  handleChange = (event) => {
    const sUser = event.target.value;
    this.setState(() => ({
      selectedUser: sUser,
    }));
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()
    if (this.state.selectedUser === undefined || this.state.selectedUser === null) {
      alert('Please, select an user!')
      // TODO: change alert by button disabled
    } else {
      console.log('setting authedUser: ', this.state.selectedUser)
      this.props.dispatch(handleLoginUser(this.state.selectedUser)).then(() => {
        this.props.auth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      })
    }
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } }
    const { redirectToReferrer } = this.state
    const { users } = this.props

    // TODO: If a variable evaluates to a boolean, it can be written as: if (redirectToReferrer) { ... }
    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='login'>
        <div><h3>Welcome to Would You Rather App!</h3></div>
        <div><img src={logo} className='App-logo' alt='logo' /></div>
        <div><p>Please sign in to continue</p></div>
        <div>
          <form className='login-form' onSubmit={this.handleSubmitLogin}>
            <div>
              <select id='user-select' onChange={this.handleChange} >
                <option key='no-key' value='Select User' selected disabled >Select User</option>
                { 
                  users.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>    
                  ))
                }
              </select>
            </div>
            <div>
              <button type='submit'>Sign in</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
})

export default connect(mapStateToProps)(Login)