import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    return (
      <div className='poll'>
        <div className='poll-title'>Asked by Tyler McGinnis</div>
        <div>
          <div className='row'>
            <div className='column left'>
              <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
              />
            </div>
            <div className='column right'>
              <h2 className='wyr row'>Results:</h2>
              <div className='radio row'>
                <label>
                  <input 
                    type='radio' 
                    value='optionOne'
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'optionOne'} />
                  {question.optionOne.text}
                </label>
              </div>
              <div className='radio row' >
                <label>
                <input 
                    type='radio' 
                    value='optionTwo'
                    onChange={this.handleOptionChange}
                    checked={this.state.selectedOption === 'optionTwo'} />
                  {question.optionTwo.text}
                </label>
              </div>
              <button className='btn row'>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Result)