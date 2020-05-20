import React from 'react'
import ButtonRounded from '../ButtonRounded/ButtonRounded'
import QuantumSpoolButton from '../QuantumSpoolButton'
import Corner from '../Corner'

const FlightTab = ({ onClick }) => {
  return (
    <div className="tab_container">
      <div className="grid">
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
          onClick={() => onClick('macro:11')}
          text="LIGHTS"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:20')}
          text="VTOL"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:23')}
          text="CRUISE"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:24')}
          text="DECOUPLE"
          color="purple"
        />
        <ButtonRounded
          onClick={() => onClick('macro:38')}
          text="SELF DESTRUCT"
          color="red"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', height: '60%' }}>
        <Corner reversed children={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <QuantumSpoolButton onClick={onClick} />
          </div>
        } />
        <div style={{ width: '1rem' }}></div>
        <Corner children={
          <div style={{ height: '100%', marginLeft: '20%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '1rem' }}>
            <ButtonRounded
              onClick={() => onClick('macro:9')}
              text="SCAN MODE"
              color="purple"
            />
            <ButtonRounded
              onClick={() => onClick('macro:37')}
              text="PING"
              color="purple"
            />
            <ButtonRounded
              onClick={() => onClick('macro:21')}
              text="DOORS open/close"
              color="purple"
            />
            <ButtonRounded
              onClick={() => onClick('macro:22')}
              text="DOORS lock/unlock"
              color="purple"
            />
          </div>
        } />
      </div>
    </div>
  )
}

export default FlightTab
