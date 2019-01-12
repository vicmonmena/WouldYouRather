import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollForm from './PollForm'
import PollDetails from './PollDetails'


class Poll extends Component {

  render() {

    const { question, author, authedUser } = this.props
    
    const answered = 
      question.optionOne.votes.indexOf(authedUser.id) !== -1 
      || question.optionTwo.votes.indexOf(authedUser.id) !== -1 

    console.log(this.props)
    return (
      <div className='poll-container'>
      { answered === true
        ? <PollDetails 
            question={question} 
            author={author}/>
        : <PollForm 
            question={question} 
            author={author} />
      }
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions, authedUser }, props) => {
  const { id } = props.match.params
  console.log('Poll::mapStateToProps::author:')
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