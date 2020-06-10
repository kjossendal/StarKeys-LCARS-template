import React from 'react'
import ButtonRounded from '../ButtonRounded/ButtonRounded'
import QuantumSpoolButton from '../QuantumSpoolButton'
import Corner from '../Corner'
import ButtonSquared from '../ButtonSquared/ButtonSquared'
import { useOrientation } from '../../utils/useOrientation'

const FlightTab = ({ onClick }) => {
  const orientation = useOrientation();

  const OrientationStyles = {
    display: 'flex',
    height: '100%',
    flexWrap: orientation === 'portrait-primary' ? 'wrap' : 'nowrap'
  };

  return (
    <div className="tab_container">
      <div style={OrientationStyles}>
        <Corner
          reversed
          containerStyles={{
            height: orientation === 'portrait-primary' ? '50%' : '100%',
          }}
          childContainerStyle={{
            marginRight: '20%',
            padding: '2rem'
          }}
          children={
            <div style={{ position: 'relative', height: 0, paddingTop: '100%' }}>
              <QuantumSpoolButton onClick={onClick} />
            </div>
          }
          buttons={[
            <ButtonSquared
              key="macro:20"
              onClick={() => onClick('macro:20')}
              text="VTOL"
              color="blue"
              style={{
                height: '20%',
                marginBottom: '0.4rem'
              }}
              textStyle={{
                fontSize: '2vmax',
                right: '0.5rem',
                bottom: '0.5rem',
              }}
            />,
            <ButtonSquared
              key="macro:23"
              onClick={() => onClick('macro:23')}
              text="CRUISE"
              color="purple"
              style={{
                height: '20%',
                marginBottom: '0.4rem'
              }}
              textStyle={{
                fontSize: '2vmax',
                right: '0.5rem',
                bottom: '0.5rem',
              }}
            />,
            <ButtonSquared
              key="macro:24"
              onClick={() => onClick('macro:24')}
              text="DECOUPLE"
              color="purple"
              style={{
                height: '20%',
                marginBottom: '0.4rem'
              }}
              textStyle={{
                fontSize: '2vmax',
                right: '0.5rem',
                bottom: '0.5rem',
              }}
            />
          ]}
        />

        <div style={{ width: '1rem' }}></div>

        <Corner
          containerStyles={{
            height: orientation === 'portrait-primary' ? '50%' : '100%',
          }}
          childContainerStyle={{
            marginLeft: '20%',
            padding: '2rem',
            height: '80%'
          }}
          children={
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <ButtonRounded
                  onClick={() => onClick('macro:9')}
                  text="SCAN MODE"
                  color="purple"
                />
                <div style={{ height: '1.5rem' }}></div>
                <ButtonRounded
                  onClick={() => onClick('macro:37')}
                  text="PING"
                  color="purple"
                />
                <div style={{ height: '1.5rem' }}></div>
                <ButtonRounded
                  onClick={() => onClick('macro:21')}
                  text="DOORS open/close"
                  color="purple"
                />
                <div style={{ height: '1.5rem' }}></div>
                <ButtonRounded
                  onClick={() => onClick('macro:22')}
                  text="DOORS lock/unlock"
                  color="purple"
                />
                <div style={{ height: '1.5rem' }}></div>
                <ButtonRounded
                  onClick={() => onClick('macro:40')}
                  text="GIMBAL MODE"
                  color="purple"
                />
                <div style={{ height: '1.5rem' }}></div>
                <ButtonRounded
                  onClick={() => onClick('macro:12')}
                  text="EXIT SEAT"
                  color="purple"
                />
              </div>
              <div>
                <ButtonRounded
                  onClick={() => onClick('macro:13')}
                  delay={true}
                  text="EJECT"
                  color="red"
                  textStyle={{ color: 'var(--cream)' }}
                />
                <div style={{ height: '1.5rem' }}></div>
                <ButtonRounded
                  onClick={() => onClick('macro:38')}
                  delay={true}
                  text="SELF DESTRUCT"
                  color="red"
                  textStyle={{ color: 'var(--cream)' }}
                />
              </div>
            </div>
          }
          buttons={[
            <ButtonSquared
              key="macro:11"
              onClick={() => onClick('macro:11')}
              text="LIGHTS"
              color="orange"
              style={{
                height: '20%',
                marginBottom: '0.4rem'
              }}
              textStyle={{
                fontSize: '2vmax',
                right: '0.5rem',
                bottom: '0.5rem',
              }}
            />,
            <ButtonSquared
              key="macro:27"
              onClick={() => onClick('macro:27')}
              text="LANDING GEAR"
              color="cream"
              style={{
                height: '20%',
                marginBottom: '0.4rem'
              }}
              textStyle={{
                fontSize: '2vmax',
                right: '0.5rem',
                bottom: '0.5rem',
              }}
            />,
            <ButtonSquared
              key="macro:28"
              onClick={() => onClick('macro:28')}
              text="AUTO LAND"
              color="cream"
              style={{
                height: '20%',
                marginBottom: '0.4rem'
              }}
              textStyle={{
                fontSize: '2vmax',
                right: '0.5rem',
                bottom: '0.5rem',
              }}
            />
          ]}
        />
      </div>
    </div>
  )
}

export default FlightTab
