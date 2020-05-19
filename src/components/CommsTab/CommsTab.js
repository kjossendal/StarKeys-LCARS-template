import React from 'react'
import ButtonRounded from '../ButtonRounded/ButtonRounded'

const CommsTab = ({ onClick }) => {
  return (
    <div className="tab_container">
      <ButtonRounded
        onClick={() => onClick = ('macro:8')}
        text="OPEN CHANNEL"
        color={'cream'}
      />
    </div>
  )
}

export default CommsTab
