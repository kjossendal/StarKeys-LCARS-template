import React from 'react'
import Buttons from '../buttons'
import ButtonRounded from './ButtonRounded/ButtonRounded';

const Demo = ({ onClick }) => {
  return (
    <div className="grid">
      {Object.entries(Buttons).map((btn, idx) => {
        return <ButtonRounded
          key={idx}
          onClick={() => onClick(btn[0])}
          text={btn[1].description}
          color={idx % 2 === 0 ? 'purple' : 'cream'}
        />
      })}
    </div>
  )
}

export default Demo
