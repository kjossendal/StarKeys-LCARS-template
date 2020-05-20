import React from 'react'
import RadialButtons from '../RadialButtons/RadialButtons'
import './SystemsTab.css'
import ButtonRounded from '../ButtonRounded/ButtonRounded'

const SystemsTab = ({ onClick }) => {
  return (
    <div className="tab_container">
      <div className="systems_tab_container">
        <div className="systems_tab_top">
          <div className="systems_tab_top_left">
            <div className="systems_radial_bar_left">
              <span className="systems_radial_bar_text">CAPACITORS</span>
            </div>
            <div style={{ width: '70%', margin: '0 auto', position: 'relative' }}>
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
          <div className="systems_tab_top_right">
            {/* <div className="systems_tab_right_bar"></div> */}
            <div>
              <div className="systems_radial_bar_right">
                <span className="systems_radial_bar_text">SHIELD ARRAY</span>
              </div>
              <div style={{ width: '70%', margin: '0 auto', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-1rem', color: 'white', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem', zIndex: 200 }}>FRONT</span>
                <span style={{ position: 'absolute', color: 'white', right: '-2.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem' }}>RIGHT</span>
                <span style={{ position: 'absolute', color: 'white', left: '-1.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '2rem' }}>LEFT</span>
                <span style={{ position: 'absolute', color: 'white', bottom: '-1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '2rem' }}>BOTTOM</span>
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
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-3.5rem', left: 0, right: 0,
          marginTop: '2rem', display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <div style={{ flex: '0 0 calc(33.33% - 2rem)' }}>
            <ButtonRounded
              onClick={() => onClick('macro:14')}
              text="POWER"
              color="purple"
            />
          </div>
          <div style={{ flex: '0 0 calc(33.33% - 2rem)' }}>
            <ButtonRounded
              onClick={() => onClick('macro:15')}
              text="ENGINES"
              color="purple"
            />
          </div>
          <div style={{ flex: '0 0 calc(33.33% - 2rem)' }}>
            <ButtonRounded
              onClick={() => onClick('macro:16')}
              text="SHIELDS"
              color="purple"
            />
          </div>
          <div style={{ flex: '0 0 calc(33.33% - 2rem)' }}>
            <ButtonRounded
              onClick={() => onClick('macro:17')}
              text="WEAPONS"
              color="purple"
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default SystemsTab
