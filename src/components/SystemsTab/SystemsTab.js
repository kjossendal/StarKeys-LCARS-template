import React from 'react'
import ButtonRounded from '../ButtonRounded/ButtonRounded'
import './SystemsTab.css'
import RadialButtons from '../RadialButtons/RadialButtons'

const SystemsTab = ({ onClick }) => {
  return (
    <div className="tab_container">
      <div className="tab_header_container">
        <div className="tab_header">
        </div>
        <span className="tab_header_text">SYSTEMS TAB</span>
      </div>
      <div className="systems_tab_container">
        <div className="systems_tab_left">
          <ButtonRounded
            onClick={() => onClick('macro:9')}
            text="LANDING GEAR"
            color="purple"
          />
          <div style={{ height: '0.5rem' }}></div>
          <ButtonRounded
            onClick={() => onClick('macro:10')}
            text="AUTO LAND"
            color="purple"
          />
          <div style={{ height: '0.5rem' }}></div>
          <ButtonRounded
            onClick={() => onClick('macro:9')}
            text="SOMETHING ELSE"
            color="purple"
          />
        </div>
        <div className="systems_tab_right">
          {/* <div className="systems_tab_right_bar"></div> */}
          <RadialButtons />
        </div>
      </div>
    </div>
  )
}

export default SystemsTab
