import React, { useState } from 'react';
import './QuantumSpoolButton.css';

const QuantumSpoolButton = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive)
    onClick('macro:25')
  }
  const engage = () => {
    setIsActive(!isActive)
    onClick('macro:26')
  }

  return (
    <div className="quantum_spool_container">
      <div
        className={`quantum_spool_border ${isActive ? 'quantum_spool_animation' : undefined}`}

      >
      </div>
      <div className="quantum_spool_text_container">
        {isActive ? (
          <div
            className="quantum_spool_text_engage_container"

            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <span onClick={engage} className="quantum_spool_text_engage_half">ENGAGE</span>
            <span onClick={toggleActive} className="quantum_spool_text_engage_half">CANCEL</span>
          </div>
        ) : (<span onClick={toggleActive} style={{ fontSize: '5vw', color: 'white' }}>SPOOL</span>)}
      </div>
    </div>
  )
}

export default QuantumSpoolButton
