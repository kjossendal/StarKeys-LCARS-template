import React from 'react'
import PropTypes from 'prop-types';
import './ButtonRounded.css'

const ButtonRounded = ({ onClick, text, color, style, textStyle }) => {
  const ContainerStyles = {
    position: 'relative',
    padding: '0.5rem 0',
    borderRadius: '50px',
    width: '100%',
    backgroundColor: `var(--${color})`,
    ...style
  }
  const TextStyles = {
    marginLeft: '40px',
    fontSize: '2.5rem',
    ...textStyle
  }
  return (
    <div
      className="btn_rounded"
      onClick={onClick}
      style={ContainerStyles}
    >
      <span className="btn_rounded_vertical_stripe"></span>
      <span style={TextStyles}>{text}</span>
    </div>
  )
}

ButtonRounded.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default ButtonRounded
