import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../logo.svg';
import { handleLoginUser } from '../actions/shared'
class Login extends Component {

  state = {
    toHome: false,
    selectedUser: null,
    test: false,
  }

  handleChange = (event) => {
    const sUser = event.target.value;
    console.log('prev::onChange: ', sUser)
    this.setState(() => ({
      selectedUser: sUser,
    }));
    console.log('handleChange::selectedUser: ', this.state.selectedUser)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit::selectedUser: ', this.state.selectedUser)
    if (this.state.selectedUser === undefined) {
      alert('Please, select an user!')
      // TODO: show a modal
    } else {
      this.setState({
        toHome: true
      })
      this.props.dispatch(handleLoginUser(this.state.selectedUser))
    }
  }

  render() {
    const { users } = this.props
    console.log('render::selectedUser: ', this.state.selectedUser)

    
    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='login'>
        <h3 className='center'>Welcome to Would You Rather App!</h3>
        <p className='center'>Please sign in to continue</p>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Sign in</h2>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <select id='user-select' onChange={this.handleChange}>
            <option key='placeholder' value='Select User' disabled selected>Select User</option>
            { 
              users.map((user) => (
                <option key={user.id} value={user.id}>{user.name}</option>    
              ))
            }
          </select>
          <button className='btn' type='submit'>
              Sign in
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => ({
  users: Object.values(users),
  authedUser
})

export default connect(mapStateToProps)(Login)