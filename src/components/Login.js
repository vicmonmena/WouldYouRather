import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import logo from '../logo.svg';
import { handleLoginUser } from '../actions/shared'

// TODO: RESOLVE: index.js:1446 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
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
    if (this.state.selectedUser === undefined || this.state.selectedUser === null) {
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
      return <Redirect to='/home' />
    }

    return (
      <div className='login'>
        <div><h3>Welcome to Would You Rather App!</h3></div>
        <div><img src={logo} className='App-logo' alt='logo' /></div>
        <div><p>Please sign in to continue</p></div>
        <div>
          <form className='login-form' onSubmit={this.handleSubmit}>
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