import React from 'react'
import "./ButtonSquared.css"

const ButtonSquared = ({ onClick, text, color, active }) => {
  return (
    <div
      className={`btn_squared ${active && 'btn_active'}`}
      onClick={onClick}
      style={{ backgroundColor: `var(--${color})` }}
    >
      <span className="btn_squared_text">{text}</span>
    </div>
  )
}

export default ButtonSquared
