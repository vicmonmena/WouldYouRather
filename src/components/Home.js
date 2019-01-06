import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {

  render() {
    const { unAnsweredQuestions, answeredQuestions, users } = this.props
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

const mapStateToProps = ({ questions, users }) => ({
  unAnsweredQuestions: Object.values(questions),
  answeredQuestions: Object.values(questions),
  users: Object.values(users)
})

export default connect(mapStateToProps)(Home)