import React from 'react'
import './BottomBar.css';
import AppSvg from './AppSvg';
import ButtonSquared from './ButtonSquared/ButtonSquared';

const BottomBar = ({ onClick }) => {
  return (
    <div className="bottom_bar" >
      <AppSvg name="icon_endcap_left" height={30} width={45} color="var(--cream)" />
      <div className="bottom_bar_button" onClick={onClick()} ><span>HELMET</span></div>
      <div className="bottom_bar_button" onClick={onClick("macro:7")} >STARMAP</div>
      <div className="bottom_bar_button" onClick={onClick("macro:6")} >MOBIGLASS</div>
      <div className="bottom_bar_button" onClick={onClick("macro:1")} >FLIGHT READY</div>
      <AppSvg name="icon_endcap_right" height={30} width={45} color="var(--cream)" />
    </div>
  )
}

export default BottomBar
