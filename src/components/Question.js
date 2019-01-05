import React, { Component } from 'react'

class Question extends Component {
  render() {
    const { question, author } = this.props
    return (
      <div key={question.id}>
        <div className='question-author'>{author.name} asks:</div>
        <div>
          <div className='row'>
            <div className='column left'>
              Picture
            </div>
            <div className='column right'>
              <p>Would you rather</p>
              <p>{question.optionOne.text}</p>
              <button>View Poll</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question