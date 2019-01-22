import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollForm from './PollForm'
import PollDetails from './PollDetails'
import { handleQuestionAnswer } from '../actions/questions'

class Poll extends Component {

  handleSubmit = (questionId, selectedOption) => {
    const { dispatch, } = this.props
    dispatch(handleQuestionAnswer(questionId, selectedOption))
  }

  render() {

    const { question, author, authedUser } = this.props
    
    const answered = 
      question.optionOne.votes.indexOf(authedUser.id) !== -1 
      || question.optionTwo.votes.indexOf(authedUser.id) !== -1
    
    return (
      <div className='poll-container'>
      { answered === true
        ? <PollDetails 
            question={question} 
            author={author}/>
        : <PollForm 
            question={question} 
            author={author} 
            handleSubmit={this.handleSubmit}
            />
      }
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
  const { id } = props.match.params
  console.log('authedUser: ', authedUser)
  console.log('questions: ', questions)
  console.log('id: ', id)
  const question = Object.values(questions).find((q) => (q.id === id))
  return(
    {
      author: Object.values(users).find((u) => (u.id === question.author)),
      question,
      authedUser
    }
  )
}

export default connect(mapStateToProps)(Poll)