import React from 'react'

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

// TODO: PropTypes

export default ProgressBar