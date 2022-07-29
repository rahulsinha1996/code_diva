import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext';

export const VideoCall = () => {
  const {name,callAccepted, myVideo, userVideo, callEnded, stream}=useContext(SocketContext)


  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"center"}}>
      {stream && (
          <div style={{display:"block"}}>
            <div>{name}</div>
          <video playsInline muted ref={myVideo} autoPlay/>
        </div>
      )}
      {
        callAccepted && !callEnded &&(
          <div  style={{display:"block"}}>
            <div>{name}</div>
          <video playsInline ref={userVideo} autoPlay/>
        </div>
        )
      }
   
    </div>
    
  )
}
