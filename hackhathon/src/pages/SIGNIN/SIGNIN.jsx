import React from 'react'
import "./SIGNIN.css"

const SIGNIN = (props) => {
    return (
        <div className='signup'>
        <h1>Already Registered ?</h1>
        <div className='inputdiv'>
        <label>Email Address *</label>
        <br />
        <input className='input' type="email" name="useremail"/>
        <br />
        <label>Password</label>
        <br />
        <input className='input' type="text" name="password"/>
        <p className='pwd'>Forgot Password ?</p>
        <br />
        <button className='btn'>SIGN IN</button>

        <p>Doesn't have an account ? Sign Up</p>
        </div>
    </div>
    )
}

export default SIGNIN
