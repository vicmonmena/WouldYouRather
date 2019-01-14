import React, { Component } from 'react'

class CardBoard extends Component {

  render() {
    const { info } = this.props
    return (
      <div key={info.id} className='cardboard-container'>
        <div className='cardboard-avatar'>
          <div className='trophy'></div>
          <div className='avatar'>
            <img
              src={info.image}
              alt={`Avatar of ${info.name}`}
            />
          </div>
        </div>
        <div className='h-separator'></div>
        <div className='cardboard-info'>
          <div><h2>{info.name}</h2></div>
          <p>Answered questions {info.answered}</p>
          <p>Created questions {info.created}</p>
        </div>
        <div className='h-separator'></div>
        <div className='cardboard-score'>
          <div>  
            <h3>Score</h3>
            <p>{info.score}</p>
          </div>
        </div>
      </div>
    )
  }
}

// TODO: PropTypes

export default CardBoard