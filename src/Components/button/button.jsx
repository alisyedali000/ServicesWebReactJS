import React from 'react'

const Button = ({ title, className, style }) => {
  return (

    <div className={className} style={style}>
      <p className='custom-btn-title'>
        {title}
      </p>
    </div>
  )
}

export default Button