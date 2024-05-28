import React from 'react'

const Button = ({ title, className }) => {
  return (

    <div className={className}>
      <p className='custom-btn-title'>
        {title}
      </p>
    </div>
  )
}

export default Button