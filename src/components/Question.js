import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends Component {

  toPoll = (event, id) => {
    event.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render() {

    const { question, author } = this.props
    return (
      <div className='question' key={question.id}>
        <div className='question-author'>{author.name} asks:</div>
        <div className='question-info'>
          <div className='avatar'>
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
            />
          </div>
          <div className='info'>
            <p className='wyr'>Would you rather</p>
            <p>{question.optionOne.text}</p>
            <button className='btn' onClick={(e) => this.toPoll(e, question.id)}>
              View Poll
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Question))