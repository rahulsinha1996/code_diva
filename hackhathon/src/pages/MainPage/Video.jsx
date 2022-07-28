import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

function Video() {
  const userId= JSON.parse(localStorage.getItem("userId"))
  const navigate= useNavigate();

  useEffect(()=>{
  
    if(!userId){
     navigate("/login")
    }
  },[userId])

  const handleClick =() =>{
    
  }
  return (
    <>
    <button onClick={handleClick}>Logout</button>
    <div>Video</div>
    </>
  )
}

export default Video