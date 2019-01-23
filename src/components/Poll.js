import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PollForm from './PollForm'
import PollDetails from './PollDetails'
import { handleQuestionAnswer } from '../actions/questions'

class Poll extends Component {


  handleSubmit = (questionId, selectedOption) => {
    const { dispatch, } = this.props
    dispatch(handleQuestionAnswer(questionId, selectedOption))
  }

  render() {

    const { users, questions, id, authedUser } = this.props

    const question = Object.values(questions).find((q) => (q.id === id))
    
    // If ID is invalid then resource not found
    if (question === undefined) {
      return <Redirect to='/404' />
    }

    const author = Object.values(users).find((u) => (u.id === question.author))
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
  console.log('props: ', props)
  const { id } = props.match.params
  return(
    {
      users,
      questions,
      id,
      authedUser
    }
  )
}

export default connect(mapStateToProps)(Poll)