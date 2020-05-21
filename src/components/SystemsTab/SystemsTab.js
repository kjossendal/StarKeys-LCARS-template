import React from 'react';
import RadialButtons from '../RadialButtons/RadialButtons';
import ButtonRounded from '../ButtonRounded/ButtonRounded';
import Corner from '../Corner';
import ButtonSquared from '../ButtonSquared/ButtonSquared';
import { useOrientation } from '../../utils/useOrientation';
import './SystemsTab.css';

const SystemsTab = ({ onClick }) => {
  const orientation = useOrientation();

  const OrientationStyles = {
    display: 'flex',
    flexWrap: orientation === 'portrait-primary' ? 'wrap' : 'nowrap'
  };
  return (
    <div className="tab_container">
      <div className="systems_tab_container">
        <div style={OrientationStyles}>
          <div className="systems_tab_col" style={{ width: orientation === 'portrait-primary' ? '100%' : '50%' }}>
            <div className="systems_radial_bar_left">
              <span className="systems_radial_bar_text">CAPACITORS</span>
            </div>
            <div style={{ width: orientation === 'portrait-primary' ? '60%' : '70%', margin: '0 auto', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-1rem', color: 'white', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem', zIndex: 200 }}>ENGINES</span>
              <span style={{ position: 'absolute', color: 'white', right: '-4rem', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem' }}>SHIELDS</span>
              <span style={{ position: 'absolute', color: 'white', left: '-4.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem' }}>WEAPONS</span>
              <RadialButtons
                segments={3}
                id="power"
                onClick={onClick}
                buttonData={[
                  {
                    macro: 'macro:4',
                    text: 'ENGINES'
                  },
                  {
                    macro: 'macro:5',
                    text: 'SHIELDS'
                  },
                  {
                    macro: 'macro:6',
                    text: 'WEAPONS UP'
                  },
                ]} />
            </div>
          </div>
          <div className="systems_tab_col" style={{ width: orientation === 'portrait-primary' ? '100%' : '50%' }}>
            <div className="systems_radial_bar_right">
              <span className="systems_radial_bar_text">SHIELD ARRAY</span>
            </div>
            <div style={{ width: orientation === 'portrait-primary' ? '60%' : '70%', margin: '0 auto', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '-1rem', color: 'white', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem', zIndex: 200 }}>FRONT</span>
              <span style={{ position: 'absolute', color: 'white', right: '-2.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem' }}>RIGHT</span>
              <span style={{ position: 'absolute', color: 'white', left: '-1.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem' }}>LEFT</span>
              <span style={{ position: 'absolute', color: 'white', bottom: '1.4rem', left: '80%', transform: 'translateX(-50%)', fontSize: '2rem' }}>REAR</span>
              <RadialButtons
                segments={4}
                id="shields"
                onClick={onClick}
                buttonData={[
                  {
                    macro: 'macro:35',
                    text: 'SHIELDS FRONT'
                  },
                  {
                    macro: 'macro:33',
                    text: 'SHIELDS RIGHT'
                  },
                  {
                    macro: 'macro:30',
                    text: 'SHIELDS REAR'
                  },
                  {
                    macro: 'macro:31',
                    text: 'SHIELDS LEFT'
                  },
                ]} />
            </div>
          </div>
        </div>
        <div style={{ height: '100%' }}>
          <Corner
            reversed
            containerStyles={{
              height: '100%'
            }}
            childContainerStyle={{
              marginRight: '20%',
              display: 'flex',
              alignItems: 'center'
            }}
            children={
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', width: '100%', padding: '0 1rem' }}>

                <div style={{ flex: '0 0 calc(25% - 2rem)' }}>
                  <ButtonRounded
                    onClick={() => onClick('macro:14')}
                    text="POWER"
                    color="purple"
                    style={{ minWidth: '15rem', marginBottom: '1rem' }}
                  />
                </div>
                <div style={{ flex: '0 0 calc(25% - 2rem)' }}>
                  <ButtonRounded
                    onClick={() => onClick('macro:15')}
                    text="ENGINES"
                    color="purple"
                    style={{ minWidth: '15rem', marginBottom: '1rem' }}
                  />
                </div>
                <div style={{ flex: '0 0 calc(25% - 2rem)' }}>
                  <ButtonRounded
                    onClick={() => onClick('macro:16')}
                    text="SHIELDS"
                    color="purple"
                    style={{ minWidth: '15rem', marginBottom: '1rem' }}
                  />
                </div>
                <div style={{ flex: '0 0 calc(25% - 2rem)' }}>
                  <ButtonRounded
                    onClick={() => onClick('macro:17')}
                    text="WEAPONS"
                    color="purple"
                    style={{ minWidth: '15rem', marginBottom: '1rem' }}
                  />
                </div>
              </div>
            }
            buttons={[
              <ButtonSquared
                key="macro:19"
                onClick={() => onClick('macro:19')}
                text="CYCLE CM"
                color="cream"
                style={{
                  height: '20%',
                  marginBottom: '0.4rem'
                }}
                textStyle={{
                  fontSize: '1.7rem',
                  right: '0.5rem',
                  bottom: '0.5rem',
                }}
              />,
              <ButtonSquared
                key="macro:18"
                onClick={() => onClick('macro:18')}
                text="LAUNCH CM"
                color="cream"
                style={{
                  height: '20%',
                  marginBottom: '0.4rem'
                }}
                textStyle={{
                  fontSize: '1.7rem',
                  right: '0.5rem',
                  bottom: '0.5rem',
                }}
              />
            ]}
          />
        </div>
      </div>
    </div >
  )
}

export default SystemsTab
