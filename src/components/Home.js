import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {

  componentDidMount() {
    document.getElementById('defaultOpen').click()
  }

  componentWillUpdate() {
    document.getElementById('defaultOpen').click()
  }

  handleClickTab = (event, question) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(question).style.display = "block";
    event.currentTarget.className += " active";
  }
  render() {
    const { unAnsweredQuestions, answeredQuestions, users, authedUser } = this.props
    
    console.log('home::render::authedUser: ', authedUser)
    // TODO: Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

    if (!(authedUser)) return (<div>Loading...</div>)
    return(
      <div className='home-container'>
        <div className='tab'>
          <button id="defaultOpen" className='tablinks' onClick={(e) => this.handleClickTab(e, 'unanswered')}>Unanswered questions</button>
          <button className='tablinks' onClick={(e) => this.handleClickTab(e, 'answered')}>Answered questions</button>
        </div>
        <div id='unanswered' className='tabcontent'>
          {
            unAnsweredQuestions.map((quest) => (
              <div key={quest.id}>
                <Question question={quest} author={users.find((u) => (u.id === quest.author))}/>
              </div>
            ))
          }
        </div>
        <div id='answered' className='tabcontent'>
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
    )
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  console.log('home::mapStateToProps::authedUser: ', authedUser)
  return(
    {
      unAnsweredQuestions: Object.values(questions).filter((question) => (
        Object.keys(authedUser.answers).indexOf(question.id) === -1
      )).sort((questA,questB) => questB.timestamp - questA.timestamp),
      answeredQuestions: Object.values(questions).filter((question) => (
        Object.keys(authedUser.answers).indexOf(question.id) !== -1
      )).sort((questA,questB) => questB.timestamp - questA.timestamp),
      users: Object.values(users),
      authedUser: authedUser
    }
  )
}

export default connect(mapStateToProps)(Home)