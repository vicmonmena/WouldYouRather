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
      alert('Please, enter both questions text')
      // TODO: show a modal 
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
        <div>
          <h2>Create New Question</h2>
        </div>
        <div>
          <p>Complete the question:</p>
        </div>
        <div className='wyr'>
          <p>Would you rather...</p>
        </div>
        <div className='' onSubmit={this.handleSubmit}>
          <form>
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
    )
  }
}

export default connect()(newpoll)