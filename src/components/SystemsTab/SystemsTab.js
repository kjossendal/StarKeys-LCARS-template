import React from 'react'
import ButtonRounded from '../ButtonRounded/ButtonRounded'
import './SystemsTab.css'
import RadialButtons from '../RadialButtons/RadialButtons'

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
                    macro: 'macro:17',
                    text: 'ENGINES UP'
                  },
                  {
                    macro: 'macro:18',
                    text: 'SHIELDS UP'
                  },
                  {
                    macro: 'macro:16',
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
                      macro: 'macro:14',
                      text: 'SHIELDS FRONT'
                    },
                    {
                      macro: 'macro:20',
                      text: 'SHIELDS RIGHT'
                    },
                    {
                      macro: 'macro:15',
                      text: 'SHIELDS REAR'
                    },
                    {
                      macro: 'macro:19',
                      text: 'SHIELDS LEFT'
                    },
                  ]} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid">
          <ButtonRounded
            onClick={() => onClick('macro:9')}
            text="TOGGLE COUNTERMEASURE"
            color="purple"
          />
          <div style={{ height: '0.5rem' }}></div>
          <ButtonRounded
            onClick={() => onClick('macro:10')}
            text="LAUNCH COUNTERMEASURE"
            color="purple"
          />
          <div style={{ height: '0.5rem' }}></div>
          <ButtonRounded
            onClick={() => onClick('macro:9')}
            text="GIMBALL ASSIST"
            color="purple"
          />
        </div> */}
      </div>
    </div>
  )
}

export default SystemsTab
