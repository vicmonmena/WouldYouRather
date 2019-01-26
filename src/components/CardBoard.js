import React, { Component } from 'react'
import PropTypes from 'prop-types'
import trophy_1 from '../trophy_yellow.png'
import trophy_2 from '../trophy_green.png'
import trophy_3 from '../trophy_purple.png'

// TODO: refactor this component into a stateless component (pure function), because it doesn't utilize lifecycle methods for managing state
class CardBoard extends Component {

  static propTypes = {
    info: PropTypes.object.isRequired,
    position: PropTypes.number.isRequired,
  }

  render() {
    const { info, position } = this.props
    // TODO: move this ternary out of the component (as helper function) and use if-else statement for easy-understanding
    const trophyImg = 
      position === 1 
        ? trophy_1
        : position === 2
          ? trophy_2
          : trophy_3
    return (
      <div key={info.id} className='cardboard-container'>
        <div className='.cardboard-image'>
          <div className='trophy'>
            <img
              src={trophyImg}
              alt='Trophy'
            />
          </div>
        </div>
        <div className='.cardboard-image'>
          <div className='avatar'>
            <img
              src={info.image}
              alt={`Avatar of ${info.name}`}
            />
          </div>
        </div>
        <div className='h-separator'></div>
        <div className='cardboard-info'>
          <div></div>
          <div><h2>{info.name}</h2></div>
          <p>Answered questions {info.answered}</p>
          <p>Created questions {info.created}</p>
        </div>
        <div className='h-separator'></div>
        <div className='cardboard-score'>
          <div className='score'>  
            <div className='score-title'>Score</div>
            <div>
              <div className='score-value'><span>{info.score}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardBoard