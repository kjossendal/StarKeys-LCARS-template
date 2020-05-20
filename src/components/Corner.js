import React from 'react'
import './Corner.css';

const Corner = ({ children, reversed }) => {
  return (
    <div className="corner_container">
      {reversed ? (
        <>
          <div className="corner_top_reversed" style={{ height: '4rem' }}></div>
          {children}
          <div className="corner_vertical_bar_reversed"></div>
        </>
      ) : (
          <>
            <div className="corner_top" style={{ height: '4rem' }}></div>
            {children}
            <div className="corner_vertical_bar"></div>
          </>
        )}

      <svg width="0" height="0">
        <defs>
          <clipPath id="barTopCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
                  C 0 0, 0.2 0, 0.2 0
                  L 1,0
                  L 1,.5
                  C .2 .5, .2 .5, .20 1
									Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Corner
