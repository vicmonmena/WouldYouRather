import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class PollForm extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

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
    const { question, handleSubmit } = this.props
    handleSubmit(question.id, this.state.selectedOption)
  }

  render() {

    const { question, author } = this.props
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
            <form className='poll-form' onSubmit={this.handleSubmit}>
              <div className='poll-input'>
                <input 
                  type='radio' 
                  value='optionOne'
                  name='optionOne'
                  onChange={this.handleOptionChange}
                  checked={selectedOption === 'optionOne'} />
                <label htmlFor='optionOne'>{question.optionOne.text}</label>
              </div>
              <div className='poll-input'>
                <input 
                  type='radio' 
                  value='optionTwo'
                  name='optionTwo'
                  onChange={this.handleOptionChange}
                  checked={selectedOption === 'optionTwo'} />
                <label htmlFor='optionTwo' >{question.optionTwo.text}</label>
              </div>
                <button className='btn poll-button'>View Poll</button>
            </form>
            
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(PollForm)