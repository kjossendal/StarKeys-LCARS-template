import React, { useState } from 'react';
import './App.css';
import { ButtonRounded } from './components';
import Buttons from './buttons'
import ButtonSquared from './components/ButtonSquared/ButtonSquared';
import SystemsTab from './components/SystemsTab/SystemsTab';
import WeaponsTab from './components/WeaponsTab/WeaponsTab';
import CommsTab from './components/CommsTab/CommsTab';

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

  const Client2Server = (macrostr) => {
    console.log("PRESS", macrostr)
    if (hostip.trim() === "") {
      alert("Host IP is required. Please provide the value shown when starting the StarKeys-vMFD Server on the gaming PC.");
      return;
    }
    if (fileid.trim() === "") {
      alert("File ID is required. Please provide the value shown when starting the StarKeys-vMFD Server on the gaming PC.");
      return;
    }
    if (hostip != null && fileid != null) {
      if ("WebSocket" in window) {
        //alert("WebSocket is supported by your Browser!");

        // Let us open a web socket
        var ws = new WebSocket("ws://" + hostip + "/echo");

        ws.onopen = function () {

          // Web Socket is connected, send data using send()
          ws.send("fileid:" + fileid + "_" + macrostr);
          // alert("Message is sent...");
        };

        ws.onmessage = function (evt) {
          const received_msg = evt.data;
          // alert("Message is received...");
        };

        ws.onclose = function () {
          // websocket is closed.
          //alert("Connection is closed...");
        };
      } else {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
      }
    }
  }

  return (
    <div className="App">
      <div className="bar bar_top">
        <div className="bar_top_left">
          <label>Host IP: </label>
          <input
            type="text"
            name="hostip"
            onChange={e => handleIPChange(e)}
            value={hostip}
          />
          <label>File ID: </label>
          <input type="text" name="fileid" onChange={e => handleFileIDChange(e)} />
        </div>
        <div className="bar_top_right">
          LCARS-SC
        </div>
      </div>

      <div className="content">
        <div className="box_left">
          <div className="box_left_top">
            <ButtonSquared
              onClick={() => setTab(0)}
              text="SYSTEMS STATUS"
              active={tab === 0}
              color="orange"
            />
            <ButtonSquared
              onClick={() => setTab(1)}
              text="WEAPONS CONTROL"
              active={tab === 1}
              color="orange"
            />
            <ButtonSquared
              onClick={() => setTab(2)}
              text="DEFENSIVE SYSTEMS"
              active={tab === 2}
              color="orange"
            />
            <ButtonSquared
              onClick={() => setTab(3)}
              text="SHOW ALL"
              active={tab === 3}
              color="orange"
            />
          </div>
          <div className="box_left_bottom">
            <ButtonSquared
              onClick={() => setTab(4)}
              text="COMMS SYSTEMS"
              color="cream"
            />
            <ButtonSquared
              onClick={() => setTab(5)}
              text="MISC"
              color="cream"
            />
            <div style={{ height: '100%', backgroundColor: 'var(--yellow)' }}></div>
            <div style={{ height: '100%', backgroundColor: 'var(--yellow)' }}></div>
          </div>
        </div>
        <div className="box_right">
          {tab === 0 && <SystemsTab onClick={(macrostr) => Client2Server(macrostr)} />}
          {tab === 1 && <WeaponsTab />}
          {tab === 2 && <SystemsTab />}
          {tab === 3 && (
            <div className="grid">
              {Object.entries(Buttons).map((btn, idx) => {
                return <ButtonRounded
                  key={idx}
                  onClick={() => Client2Server(btn[0])}
                  text={btn[1].description}
                  color={idx % 2 === 0 ? 'purple' : 'cream'}
                />
              })}
            </div>
          )}
          {tab === 4 && <CommsTab />}
        </div>
      </div>

      <div className="bar bar_bottom">
      </div>

      <svg width="0" height="0">
        <defs>
          <clipPath id="barTopCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
                  C 0 0, 0.07 0, .1 0
                  L 1,0
                  L 1,.7
                  C .3 .7, .2 .7, .20 1
									Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default App;
