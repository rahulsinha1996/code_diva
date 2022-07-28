import React from 'react'
import "./SIGNUP.css"
import { Link , useNavigate } from "react-router-dom"
import { useState } from 'react'

const SIGNUP = (props) => {
    const [formData, setFormData] = useState({})
    const navigate= useNavigate()
   const handleChange= (e)=>{
       let inputName= e.target.name;

       setFormData({
        ...formData,
        [inputName] : e.target.value
      })
   }
   
   const handleClick = async()=>{
    try {
        let res = await fetch("https://taskdeployment.herokuapp.com/auth/signup",{
          method: "post",
          headers : {"content-type" : "application/json"},
          body: JSON.stringify({
             formData
          })
        })
        alert("Sign Up successful")
       let data= await res.json();
       console.log(data)
      let id= data.user._id;
      console.log(id)
      localStorage.setItem("userId", JSON.stringify(id))
      navigate("/signin")
        
       } catch (error) {
        console.log(error)
       }
   }
    return (
        <div className='signup'>
            <h1>Create an Account</h1>
            <p>Personal Information</p>
            <div className='inputdiv'>
            <label className='label'> Name *</label>
            <br />
            <input className='input' type="text" name="name" placeholder='Enter Name'  onChange= {handleChange}/>
            <br />
            <label>Username *</label>
            <br />
            <input className='input' type="text" name="username" placeholder='Enter Username' onChange= {handleChange}/>
            <br />
            <label>Email Address *</label>
            <br />
            <input className='input' type="email" name="email" placeholder='Enter Email'  onChange= {handleChange}/>
            <br />
            <label>Password</label>
            <br />
            <input className='input' type="text" name="password" placeholder='Enter Password'  onChange= {handleChange}/>
            <br />
            <button onClick={handleClick} className='btn'>CREATE</button>

            <p>Already a user? <Link to= "/signin">Sign In</Link> </p>
            </div>
        </div>
    )
}

export default SIGNUP
