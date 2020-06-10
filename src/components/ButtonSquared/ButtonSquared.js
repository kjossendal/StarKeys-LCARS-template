import React from 'react'
import "./ButtonSquared.css"

const ButtonSquared = ({ onClick, text, color, active, style, textStyle }) => {
  const ContainerStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    backgroundColor: `var(--${color})`,
    ...style
  }
  const TextStyles = {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    fontSize: '1.9vmax',
    ...textStyle
  }
  return (
    <div
      className={`btn_squared ${active && 'btn_active'}`}
      onClick={onClick}
      style={ContainerStyles}
    >
      <span style={TextStyles}>{text}</span>
    </div>
  )
}

export default ButtonSquared
