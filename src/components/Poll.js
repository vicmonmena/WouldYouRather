import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class Poll extends Component {

  state = {
    toResults: false
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    const { id } = this.props.match.params
    // TODO: 
    dispatch(handleAnswerQuestion(id, this.state.selectedOption))
    this.setState(() => ({
      toResults: true,
    }))
  }

  render() {

    if (this.state.toResults === true) {
      return <Redirect path='/results' />
    }
    const { question, author } = this.props
    console.log(this.props)
    return (
      <div className='poll'>
        <div className='poll-title'>{author.name} asks:</div>
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
              <p className='wyr row'>Would you rather</p>
              <div className='radio row'  >
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

const mapStateToProps = ({ users, questions }, props) => {
  const { id } = props.match.params
  return(
    {
      question: Object.values(questions).find((q) => (q.id === id)),
      author: Object.values(users).find((u) => (u.questions.indexOf(id) !== -1))
    }
  )
}

export default connect(mapStateToProps)(Poll)