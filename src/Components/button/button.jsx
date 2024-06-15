import React from 'react'

const Button = ({ title, className, style }) => {
  return (

    <div className={className} style={style}>
      <p className='custom-btn-title' style={{color: 'black'}}>
        {title}
      </p>
    </div>
  )
}

export default Button