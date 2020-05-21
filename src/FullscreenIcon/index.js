import React from 'react';
import './Fullscreen.css';

const FullscreenIcon = ({ handleFullscreen }) => {
  return (
    <section onClick={handleFullscreen} className="full_screen_icon_container"><span className="full_screen_icon"></span></section>
  )
}

export default FullscreenIcon
