import React from 'react'
import "./SIGNIN.css"
import { Link ,useNavigate } from "react-router-dom"
import { useState } from 'react'

const SIGNIN = (props) => {
    const [formData, setFormData] = useState({})
    const userId= JSON.parse(localStorage.getItem("userId"))
    const navigate= useNavigate()

    const handleChange =(e)=>{
        let inputName= e.target.name;

        setFormData({
          ...formData,
          [inputName] : e.target.value
        })
    }

const handleClick = async()=>{
    try {
        let res = await fetch("https://taskdeployment.herokuapp.com/auth/login",{
          method: "Post",
          headers : {"content-type" : "application/json"},
          body: JSON.stringify({
            username: formData.username,
            password: formData.password
          })
        })
       let data= await res.json();
        console.log(data)
        console.log(userId)
        if(userId){
          navigate("/video")
        }
       } catch (error) {
        console.log(error)
       }
}
     
    return (
        <div className='signup'>
        <h1>Already Registered ?</h1>
        <div className='inputdiv'>
        <label>Username *</label>
        <br />
        <input className='input' name="username" placeholder='Enter Username'  onChange= {handleChange}/>
        <br />
        <label>Password</label>
        <br />
        <input className='input' type="text" name="password"  placeholder='Enter Password' onChange= {handleChange}/>
        {/* <p className='pwd'>Forgot Password ?</p> */}
        <br />
        
        <button onClick={handleClick} className='btn'>SIGN IN</button>

        <p>Doesn't have an account? <Link to= "/">Sign Up</Link> </p>
        </div>
    </div>
    )
}

export default SIGNIN
