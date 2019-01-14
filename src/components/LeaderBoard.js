import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardBoard from './CardBoard'

class LeaderBoard extends Component {
  render() {

    const { users } = this.props

    const items = users.map(user => {
      const answered = Object.keys(user.answers).length
      const created = user.questions.length
      return {
        id: user.id,
        name: user.name,
        image: user.avatarURL, 
        answered,
        created,
        score: answered + created
      }
    }).sort((u1, u2) => (u2.score - u1.score))

    return(
      <div className='leaderboard-container'>
      {
        items.map((item, index) => (
          <div key={item.id}>
            <CardBoard info={item} position={index+1}/>
          </div>
        ))
      }
      </div>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.values(users),
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard)