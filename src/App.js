import React, { useState } from 'react';
import { conn } from './client2Server';

import { ButtonSquared, AppSvg, BottomBar, Demo } from './components';
import FlightTab from './components/FlightTab/FlightTab';
import SystemsTab from './components/SystemsTab/SystemsTab';
// import WeaponsTab from './components/WeaponsTab/WeaponsTab';
// import CommsTab from './components/CommsTab/CommsTab';
// import MiningTab from './components/MiningTab/MiningTab';
import './App.css';

const App = () => {
  const [hostip, setHostip] = useState('192.168.50.148');
  const [fileid, setFileid] = useState('1');
  const [tab, setTab] = useState(0);

  const handleIPChange = e => {
    setHostip(e.target.value)
  };
  const handleFileIDChange = e => {
    setFileid(e.target.value);
  };

  return (
    <div className="App">
      <div id="main_top">
        <div id="elbow_left_top_main">
          <AppSvg name="icon_elbow_left_top" height={90} width={300} color="var(--orange)" />
          <div className="inputs_container">
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
          </div>
        </div>
        <div id="block_main">
        </div>
        <div id="headline_main">SCARS-SC</div>
        <div id="endcap_right_main">
          <AppSvg name="icon_endcap_right" height={30} width={45} color="var(--cream)" />
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
            />
            <ButtonSquared
              onClick={() => setTab(1)}
              text="POWER"
              active={tab === 1}
              color="orange"
            />
            {/* <ButtonSquared
              onClick={() => setTab(2)}
              text="MINING"
              active={tab === 2}
              color="orange"
            /> */}
            <ButtonSquared
              onClick={() => setTab(3)}
              text="DEMO ALL"
              active={tab === 3}
              color="orange"
            />
          </div>
          <div className="box_left_bottom">
            <ButtonSquared
              onClick={() => setTab(5)}
              text="EMOTES"
              active={tab === 5}
              color="cream"
            />
            <ButtonSquared
              onClick={() => conn(hostip, fileid, 'macro:8')}
              text="COMMS"
              active={tab === 4}
              color="cream"
            />
          </div>
        </div>
        <div className="box_right">
          {tab === 0 && <FlightTab onClick={(macrostr) => conn(hostip, fileid, macrostr)} />}
          {tab === 1 && <SystemsTab onClick={(macrostr) => conn(hostip, fileid, macrostr)} />}
          {/* {tab === 1 && <WeaponsTab />} */}
          {/* {tab === 2 && <MiningTab onClick={(macrostr) => conn(hostip, fileid, macrostr)} />} */}
          {tab === 3 && <Demo onClick={(macrostr) => conn(hostip, fileid, macrostr)} />}
          {/* {tab === 4 && <CommsTab onClick={(macrostr) => conn(hostip, fileid, macrostr)} />} */}
        </div>
      </div>

      <div id="main_bottom">
        <div id="elbow_left_bottom_main">
          <AppSvg name="icon_elbow_left_bottom" height="100%" width={300} color="var(--yellow)" />
        </div>
        <div id="block_main_bottom">
        </div>
        <div id="endcap_right_main_bottom">
          <AppSvg name="icon_endcap_right" height={30} width={45} color="var(--yellow)" />
        </div>

      </div>

      <BottomBar onClick={(macrostr) => conn(hostip, fileid, macrostr)} />

    </div >
  );
}

export default App;
