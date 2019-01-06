import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends Component {

  toParent = (event, id) => {
    event.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render() {

    const { question, author } = this.props
    return (
      <div key={question.id}>
        <div className='question-author'>{author.name} asks:</div>
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
              <p className='wyr'>Would you rather</p>
              <p>{question.optionOne.text}</p>
              <button className='btn' onClick={(e) => this.toParent(e, question.id)}>
                View Poll
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(Question))