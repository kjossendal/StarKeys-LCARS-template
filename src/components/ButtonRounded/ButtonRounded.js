import React from 'react'
import PropTypes from 'prop-types';
import './ButtonRounded.css'

const ButtonRounded = ({ onClick, text, color }) => {
  return (
    <div
      className="btn_rounded"
      onClick={onClick}
      style={{ backgroundColor: `var(--${color})` }}
    >
      <span className="btn_rounded_vertical_stripe"></span>
      <span className="btn_rounded_text">{text}</span>
    </div>
  )
}

ButtonRounded.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default ButtonRounded
