import React, { useState, useEffect } from 'react';
import { conn } from './client2Server';
import { useFullScreen } from './utils/useFullScreen';

import { ButtonSquared, BottomBar, Demo } from './components';
import FlightTab from './components/FlightTab/FlightTab';
import SystemsTab from './components/SystemsTab/SystemsTab';
// import CommsTab from './components/CommsTab/CommsTab';
// import MiningTab from './components/MiningTab/MiningTab';
import FullscreenIcon from './FullscreenIcon';
import './App.css';

const App = () => {
  const [hostip, setHostip] = useState('');
  const [fileid, setFileid] = useState('');
  const [serverCheck, setServerCheck] = useState(true);
  const [tab, setTab] = useState(0);
  const fullscreenContainer = React.useRef();
  const [isFullscreen, setFullscreen] = useFullScreen(fullscreenContainer)

  const handleIPChange = e => {
    setHostip(e.target.value)
  };
  const handleFileIDChange = e => {
    setFileid(e.target.value);
  };

  const SquareButtonStyles = {
    height: '100%',
    transition: 'margin-right 0.2s ease-in',
  };

  useEffect(() => {
    const findGetParameter = () => {
      // params are hostip and fileid
      let tmp = [];
      window.location.search
        .substr(1)
        .split("&")
        .forEach(item => {
          tmp = item.split("=");
          if (tmp[0] === 'hostip') {
            setHostip(decodeURIComponent(tmp[1]))
          } else if (tmp[0] === 'fileid') {
            setFileid(decodeURIComponent(tmp[1]))
          } else {
            setServerCheck(false)
          }
        });
    }
    findGetParameter();
  }, [])

  return (
    <div className="App" ref={fullscreenContainer}>
      <div id="main_top">
        <div id="elbow_left_top_main">
          <div id="elbow_left_top_main--top"></div>
          <div id="elbow_left_top_main--bottom"></div>
          {!serverCheck && (<div className="inputs_container">
            <label>Host IP: </label>
            <input
              type="text"
              name="hostip"
              onChange={e => handleIPChange(e)}
              value={hostip}
            />
            <label>File ID: </label>
            <input
              type="text"
              name="fileid"
              onChange={e => handleFileIDChange(e)}
              value={fileid}
            />
          </div>)}
        </div>
        <div id="block_main">
        </div>
        <div id="headline_main">SCARS</div>
        <div id="endcap_right_main" >
          <FullscreenIcon handleFullscreen={() => isFullscreen ? document.exitFullscreen() : setFullscreen(true)} />
        </div>
      </div>

      <div className="content">
        <div className="box_left">
          <div className="box_left_top">
            <ButtonSquared
              onClick={() => setTab(0)}
              text="FLIGHT"
              active={tab === 0}
              color="orange"
              style={SquareButtonStyles}
              textStyle={{
                fontSize: '2.9vmax'
              }}
            />
            <ButtonSquared
              onClick={() => setTab(1)}
              text="POWER"
              active={tab === 1}
              color="orange"
              style={SquareButtonStyles}
              textStyle={{
                fontSize: '2.9vmax'
              }}
            />
            {/* <ButtonSquared
              onClick={() => setTab(2)}
              text="MINING"
              active={tab === 2}
              color="orange"
              style={SquareButtonStyles}
            /> */}
            {/* <ButtonSquared
              onClick={() => setTab(3)}
              text="DEMO ALL"
              active={tab === 3}
              color="orange"
              style={SquareButtonStyles}
            /> */}
          </div>
          <div className="box_left_bottom">
            <ButtonSquared
              onClick={() => conn(hostip, fileid, 'macro:2')}
              text="STARMAP"
              color="cream"
              style={SquareButtonStyles}
              textStyle={{
                fontSize: '2.9vmax'
              }}
            />
            <ButtonSquared
              onClick={() => conn(hostip, fileid, 'macro:8')}
              text="COMMS"
              color="cream"
              style={SquareButtonStyles}
              textStyle={{
                fontSize: '2.9vmax'
              }}
            />
          </div>
        </div>
        <div className="box_right">
          {tab === 0 && <FlightTab onClick={(macrostr) => conn(hostip, fileid, macrostr)} />}
          {tab === 1 && <SystemsTab onClick={(macrostr) => conn(hostip, fileid, macrostr)} />}
          {tab === 3 && <Demo onClick={(macrostr) => conn(hostip, fileid, macrostr)} />}
        </div>
      </div>

      <BottomBar onClick={(macrostr) => conn(hostip, fileid, macrostr)} />

    </div >
  );
}

export default App;
