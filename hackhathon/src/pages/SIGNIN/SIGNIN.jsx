import React from 'react'
import styles from "./SIGNIN.module.css"
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
          window.location.reload();
        }
       } catch (error) {
         alert("Please fill right Credentials")
        console.log(error)
       }
}
     
    return (
        <div className={styles.signin}>
        <h1>Already Registered ?</h1>
        <div className={styles.inputdiv}>
        <label>Username *</label>
        <br />
        <input className={styles.input} name="username" placeholder='Enter Username'  onChange= {handleChange}/>
        <br />
        <label>Password</label>
        <br />
        <input className={styles.input} type="text" name="password"  placeholder='Enter Password' onChange= {handleChange}/>
        {/* <p className='pwd'>Forgot Password ?</p> */}
        <br />
        
        <button onClick={handleClick} className={styles.btn}>SIGN IN</button>

        <p>Doesn't have an account? <Link to= "/">Sign Up</Link> </p>
        </div>
    </div>
    )
}

export default SIGNIN
