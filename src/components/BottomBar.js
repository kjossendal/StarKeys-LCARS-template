import React from 'react'
import AppSvg from './AppSvg';
import './BottomBar.css';

const BottomBar = ({ onClick }) => {
  return (
    <div className="bottom_bar" >
      {/* <AppSvg name="icon_endcap_left" height={30} width={45} color="var(--cream)" /> */}
      <div className="bottom_bar_button" onClick={() => onClick("macro:39")} ><span>HELMET</span></div>
      {/* <div className="bottom_bar_button" onClick={() => onClick("macro:2")} >STARMAP</div> */}
      <div className="bottom_bar_button" onClick={() => onClick("macro:1")} >MOBIGLASS</div>
      <div className="bottom_bar_button" onClick={() => onClick("macro:10")} >FLIGHT READY</div>
      <AppSvg name="icon_endcap_right" height={40} width={60} color="var(--cream)" />
    </div>
  )
}

export default BottomBar
