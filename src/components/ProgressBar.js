import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = (props) => {
  const { percentage } = props
  return(
    <div className="progressbar">
      <div className="progressbar-filling" style={{ width: `${percentage}%`}}>
        <div className="progressbar-percentage">
          {percentage}%
        </div>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  percentage: PropTypes.string
}

export default ProgressBar