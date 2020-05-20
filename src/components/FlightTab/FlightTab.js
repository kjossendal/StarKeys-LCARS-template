import React from 'react'
import ButtonRounded from '../ButtonRounded/ButtonRounded'

const FlightTab = ({ onClick }) => {
  return (
    <div className="tab_container">
      <div className="grid">
        <ButtonRounded
          onClick={() => onClick('macro:25')}
          text="QUANTUM SPOOL"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:26')}
          text="QUANTUM ENGAGE"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:10')}
          text="GIMBLE MODE"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:27')}
          text="LANDING GEAR"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:28')}
          text="AUTO LAND"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:38')}
          text="SELF DESTRUCT"
          color="red"
        />
      </div>
    </div>
  )
}

export default FlightTab
