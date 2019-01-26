import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'

class PollDetails extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
  }

  render() {

    /**
     * TODO: Create often repeated computations as helper functions to reduce repeated code.
     *   
     * Here are two resources with an explanation and example:
     *   
     * https://teamtreehouse.com/community/what-is-a-helper-function
     * https://medium.com/@Aenon/javascript-helper-functions-for-implementing-data-structures-a60117c1d17a
     */  

    const { question, author } = this.props

    // Calculatin each option votes and total votes
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes

    // Calculating percentages for ProgressBar
    const optionOnePercentage = Number(optionOneVotes > 0 ? (optionOneVotes * 100 / totalVotes).toFixed(1) : 0)
    const optionTwoPercentage = Number(optionTwoVotes > 0 ? (optionTwoVotes * 100 / totalVotes).toFixed(1) : 0)
    
    // Calculating what question autheduser voted to set the className
    let optionOneClassName = 'optionResults'
    let optionTwoClassName = 'optionResults'
    if (question.optionOne.votes.indexOf(author.id) !== -1) {
      optionOneClassName = 'myVotedOption'
    } else {
      optionTwoClassName = 'myVotedOption'
    }

    return (
      <div className='polldetails-container'>
        <div className='poll-title'>Asked by {author.name}</div>
        <div className='polldetails-info'>
          <div className='avatar'>
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
            />
          </div>
          <div className='horizontal-separator'></div>
          <div className='info'>
            
              <h1>Results</h1>
            
            <div className={optionOneClassName}>
              <p>You would rather {question.optionOne.text}</p>
              <div className='progressbar-container'>
                <ProgressBar percentage={optionOnePercentage} />
              </div>
              <p>{optionOneVotes} out of {totalVotes} votes</p>
            </div>
            <div className={optionTwoClassName}>
              <p>You would rather {question.optionTwo.text}</p>
              <div className='progressbar-container'>
                <ProgressBar percentage={optionTwoPercentage} />
              </div>
              <p>{optionTwoVotes} out of {totalVotes} votes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PollDetails