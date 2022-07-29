import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';
import styles from "./VideoCall.module.css"

export const VideoCall = () => {
  const {name,callAccepted, myVideo, userVideo, callEnded, stream}=useContext(SocketContext)


  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
      {stream && (
          <div style={{display:"block"}} id={styles.unit1}>
            <div>{name}</div>
          <video  id={styles.video1} playsInline muted ref={myVideo} autoPlay/>
        </div>
      )}
      {
        callAccepted && !callEnded &&(
          <div  style={{display:"block"}}>
            <div>{name}</div>
          <video  id={styles.video1} playsInline ref={userVideo} autoPlay/>
        </div>
        )
      }
   
    </div>
    
  )
}
