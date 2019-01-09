import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { handleReceiveQuestions } from '../actions/questions';

class Home extends Component {

  
  render() {
    const { unAnsweredQuestions, answeredQuestions, users, authedUser } = this.props
    
    console.log('home::render::authedUser: ', authedUser)
    // TODO: Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

    if (!(authedUser)) return (<div>Loading...</div>)
    return(
      <div className='home-container-row'>
        <div className='questions-column'>
          <h3>Unanswered Questions</h3>
          <div>
            {
              unAnsweredQuestions.map((quest) => (
                <div key={quest.id}>
                  <Question question={quest} author={users.find((u) => (u.id === quest.author))}/>
                </div>
              ))
            }
          </div>
        </div>
        <div className='questions-column'>
          <h3>Answered Questions</h3>
          <div>
            {
              answeredQuestions.map((quest) => (
                <div key={quest.id}>
                  <Question 
                    question={quest} 
                    author={users.find((u) => (u.id === quest.author))}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  console.log('HOME')
  console.log('home::mapStateToProps::authedUser: ', authedUser)
return(
    {
      unAnsweredQuestions: Object.values(questions).filter((question) => (
        question.optionOne.votes.indexOf(authedUser.id) === -1 &&
        question.optionTwo.votes.indexOf(authedUser.id) === -1
      )),
      answeredQuestions: Object.values(questions).filter((question) => (
        question.optionOne.votes.indexOf(authedUser.id) !== -1 ||
        question.optionTwo.votes.indexOf(authedUser.id) !== -1
      )),
      users: Object.values(users),
      authedUser: authedUser
    }
  )
}

export default connect(mapStateToProps)(Home)