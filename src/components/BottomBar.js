import React from 'react'
import './BottomBar.css';

const BottomBar = ({ onClick }) => {
  return (
    <div className="bottom_bar" >
      <div className="bottom_bar_button" onClick={() => onClick("macro:39")} ><span>HELMET</span></div>
      <div className="bottom_bar_button" onClick={() => onClick("macro:1")} >MOBIGLASS</div>
      <div className="bottom_bar_button" onClick={() => onClick("macro:10")} >FLIGHT READY</div>
      <div className="endcap_right"></div>
    </div>
  )
}

export default BottomBar
