import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/questions'

class PollForm extends Component {

  state = {
    selectedOption: 'optionOne'
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { dispatch, question } = this.props
    
    dispatch(handleAnswerQuestion(question.id, this.state.selectedOption))
  }

  render() {

    const { question, author, handleSubmit } = this.props
    const { selectedOption } = this.state
    return (
      <div className='pollform-container'>
        <div className='poll-title'>{author.name} asks:</div>
        <div className='poll-info'>
          <div className='avatar'>
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
            />
          </div>
          <div className='horizontal-separator'></div>
          <div className='info'>
            <p className='info-title'>Would you rather</p>
            <form className='poll-form' onSubmit={handleSubmit}>
              <div className='poll-input'>
                <input 
                  type='radio' 
                  value='optionOne'
                  name='optionOne'
                  onChange={this.handleOptionChange}
                  checked={selectedOption === 'optionOne'} />
                <label for='optionOne'>{question.optionOne.text}</label>
              </div>
              <div className='poll-input'>
                <input 
                  type='radio' 
                  value='optionTwo'
                  name='optionTwo'
                  onChange={this.handleOptionChange}
                  checked={selectedOption === 'optionTwo'} />
                <label>{question.optionTwo.text}</label>
              </div>
                <button className='btn poll-button'>View Poll</button>
            </form>
            
          </div>
        </div>
      </div>
    )
  }
}

// TODO: PropTypes

export default PollForm