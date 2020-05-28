import React, { useEffect, useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../../utils/useInterval';
import './ButtonRounded.css';

const ButtonRounded = ({ onClick, text, color, style, textStyle, delay = false }) => {
  const [fillWidth, setFillWidth] = useState(0);
  const [start, setStart] = useState(false);
  let timerRef = useRef(null);
  let buttonEl = useRef(null);

  const ContainerStyles = {
    overflow: 'hidden',
    position: 'relative',
    padding: '0.5rem 0',
    borderRadius: '50px',
    width: '100%',
    backgroundColor: `var(--${color})`,
    touchAction: 'none',
    ...style
  }
  const TextStyles = {
    marginLeft: '40px',
    fontSize: '2.5rem',
    ...textStyle
  }

  useInterval(() => {
    setFillWidth(fillWidth + 0.33)
  }, start ? 10 : null)

  const startDelay = useCallback(() => {
    setStart(true);
    timerRef.current = setTimeout(() => {
      cancelDelay();
      onClick();
    }, 3100)
  }, [onClick]);

  const cancelDelay = () => {
    setStart(false);
    clearTimeout(timerRef.current);
    setFillWidth(0);
  };

  const handleClick = useCallback((event) => {
    event.preventDefault();
    if (delay) {
      startDelay();
    } else {
      onClick();
    }
  }, [delay, onClick, startDelay]);

  useEffect(() => {
    // NOTE the ontouchstart event needs to be attached to the dom in this way in order for 
    // the preventDefault func to work properly.
    // preventDefault is needed to use touch and mouse events on the same element.
    // See https://github.com/facebook/react/issues/9809
    buttonEl.current.ontouchstart = handleClick;
  }, [handleClick]);

  return (
    <div
      ref={buttonEl}
      className="btn_rounded"
      // onTouchStart={(e) => {
      //   e.preventDefault();
      //   e.nativeEvent.preventDefault();
      //   handleClick(true);
      // }}
      onTouchEndCapture={(e) => {
        e.preventDefault();
        console.log("onTouchEndCapture")
        cancelDelay();
      }}
      onTouchEnd={e => e.preventDefault()}
      onMouseDown={(e) => {
        handleClick(e);
      }}
      onMouseUp={cancelDelay}
      style={ContainerStyles}
    >
      {delay ? <div className="fill" style={{ width: `${fillWidth}%` }}></div> : null}
      <span className="btn_rounded_vertical_stripe"></span>
      <span style={TextStyles}>{text}</span>
    </div>
  )
}

ButtonRounded.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  delay: PropTypes.bool
}

export default ButtonRounded
