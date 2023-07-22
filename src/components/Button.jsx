import React from 'react'

function Button({styles, handleClick, buttonText}) {
  return (
    <button
    style={styles} 
    onClick={handleClick}
    >
        {buttonText}
        </button>
  )
}

export default Button;