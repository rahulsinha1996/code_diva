import React, { useContext, useEffect, useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { SocketContext } from '../SocketContext'
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from "./Options.module.css"

export const Options = ({children}) => {
  const {me, callAccepted, name, setName, callEnded, leaveCall,callstart, startVideo,pauseVideo,callUser, idToCall, setIdToCall, answerCall}=useContext(SocketContext);
  const { speak, voices } = useSpeechSynthesis();
  const [show, setShow]=useState(false)
  const [startAI, setStartAI]=useState(true)
 

  const commands = [
    {
      command: "hang up" || "hangup",
      callback: () => {
        handleReset();
        if(!callAccepted && !callEnded)
        {
          speakingVoice(`invalid command`)
        }
        else if(callAccepted)
        {
          leaveCall()
          speakingVoice(`disconnected`)
          window.location.reload()
        }        
       
        SpeechRecognition.startListening({ continuous: true })
       
      }
    },
    {
      command: "answer call",
      callback: () => {
        handleReset();
        if(!callstart)
        {
          speakingVoice(`invalid command`)
        }
        else
        {
          answerCall()
        }
        
        SpeechRecognition.startListening({ continuous: true });
      }
    },
    {
      command: "enable transcribe",
      callback: () => {
        handleReset();
        setShow(true)
        speakingVoice(`transcribe enabled`)
        SpeechRecognition.startListening({ continuous: true });
        handleReset();
      }
    },
    {
      command: "disable transcribe",
      callback: () => {
        handleReset();
        setShow(false)
        speakingVoice(`transcribe disabled`)
        SpeechRecognition.startListening({ continuous: true });
      }
    }
    ,
    {
      command: "start call",
      callback: () => {
        handleReset();
        if(idToCall==="")
        {
          speakingVoice(`please enter id`)
        
        }
        if(name==="")
        {
          speakingVoice(`please enter your name`)
        }
        else if(idToCall!=="" && name!=="" )
        {
          callUser(idToCall)
          speakingVoice(`calling`)
        }
        
        SpeechRecognition.startListening({ continuous: true });
      }
    }
    ,
    {
      command: "stop camera" || "stop Camera",
      callback: () => {
        handleReset();
        pauseVideo()
        speakingVoice(`stopped`)
        SpeechRecognition.startListening({ continuous: true });
      }
    }
    ,
    {
      command: "start camera" || "start Camera",
      callback: () => {
        handleReset();
        startVideo()
        speakingVoice(`started`)
        SpeechRecognition.startListening({ continuous: true });
      }
    },
    {
      command: "enter my name *",
      callback: (name) => {
        handleReset();
        if(name.length>=0)
        {
          handleReset();
          setName(name)
          speakingVoice(`entered your name ${name}`)
        }
        setShow(false)
        SpeechRecognition.startListening({ continuous: true });
      }
    },
    {
      command: "stop assistant",
      callback: () => {
        disableAI()
      }
    }
 
  ]

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  const handleReset = () => {
    resetTranscript()
  }

  const enableAI=()=>{
    setStartAI(true)
    speakingVoice("Virtual Assistant enabled")
    SpeechRecognition.startListening({ continuous: true })
  }
 
  const disableAI=()=>{
    setStartAI(false)
    speakingVoice("Virtual Assistant disabled")
    SpeechRecognition.stopListening()
  }



  const speakingVoice = (phrase) => {
    console.log("Welcome")
    speak({ text: phrase, voice: voices[2] })
    SpeechRecognition.startListening({ continuous: true })
  }

  useEffect(()=>{
    SpeechRecognition.startListening({ continuous: true })
  },[])
  

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div id= {styles.main}>
      <div>
      <input id={styles.inp1} type="text" label="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder= "Enter caller name here"/>
      <CopyToClipboard text={me}>
      <button id={styles.btn1}>Copy ID</button>
      </CopyToClipboard>
      </div>
      <div>
      <input id={styles.inp2}  type="text" label="ID to Call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} placeholder= "Enter copied id here"/>
      {callAccepted && !callEnded ? (
        <button id={styles.btn2} onClick={leaveCall}>Hang Up</button>
      ) :
      <button id={styles.btn2}  onClick={()=>callUser(idToCall)}>Call</button>
      }
      
      
      </div>

      
      {children}
      <div id= {styles.captionContain}><h2 id= {styles.caption}>
        {transcript}
      </h2></div>
      {
        startAI ? <button id= {styles.btn3} onClick={disableAI}>Stop Assistant</button> : <button onClick={enableAI}>Start Assistant</button>
      }
      
      
      <button id= {styles.btn4}  onClick={pauseVideo}>Off Camera</button>
      <button id= {styles.btn5}  onClick={startVideo}>On Camera </button>
     
     
    </div>
  )
}
