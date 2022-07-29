import React, { useContext } from 'react'

import { SocketContext } from '../SocketContext'
export const Notification = () => {
  const { answerCall,callAccepted,receivingCall,name } = useContext(SocketContext)
  return (
    <div>
      {receivingCall && !callAccepted && (

        <div>
          <h1>{name} is calling ....</h1>
          <button onClick={answerCall}>Answer Call</button>
        </div>

      )}
    </div>
  )
}
