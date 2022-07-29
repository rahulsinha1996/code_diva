import React, { useContext } from 'react'
import styles from "./Notification.module.css"

import { SocketContext } from '../SocketContext'
export const Notification = () => {
  const { answerCall,callAccepted,receivingCall,name } = useContext(SocketContext)
  return (
    <div>
      {receivingCall && !callAccepted && (

        <div>
          <h1 id= {styles.h1}>{name} is Calling ....</h1>
          <button id= {styles.ans} onClick={answerCall}>Answer Call</button>
        </div>

      )}
    </div>
  )
}
