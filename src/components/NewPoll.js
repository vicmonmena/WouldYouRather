import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from './../actions/questions'

class newpoll extends Component {

  state = {
    toHome: false,
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (event) => {
    // TODO: destructuring better const { value, name } = event.target -> check : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.optionOne === '' || this.state.optionTwo === '') {
      // TODO: change alert by modal 
      alert('Please, enter both questions text')
    } else {
      this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
      this.setState({
        toHome: true
      })
    }
    
  }
  
  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/home' />
    }

    return(
      <div className='newpoll-container'>
        <div className='newpoll-title'>
          <h2>Create New Question</h2>
        </div>
        <div className='newpoll-content'>
          <p>Complete the question:</p>
          <h2>Would you rather...</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input 
                  type='text'
                  name='optionOne'
                  placeholder='Enter Question One Text Here'
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <p>OR</p>
              </div>
              <div>
                <input 
                  type='text' 
                  name='optionTwo'
                  placeholder='Enter Question Two Text Here'
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(newpoll)