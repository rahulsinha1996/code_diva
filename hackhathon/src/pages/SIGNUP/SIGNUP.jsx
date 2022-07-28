import React from 'react'
import "./SIGNUP.css"

const SIGNUP = (props) => {
    return (
        <div className='signup'>
            <h1>Create an Account</h1>
            <p>Personal Information</p>
            <div className='inputdiv'>
            <label className='label'>First Name *</label>
            <br />
            <input className='input' type="text" name="name"/>
            <br />
            <label>Last Name *</label>
            <br />
            <input className='input' type="text" name="username" />
            <br />
            <label>Email Address *</label>
            <br />
            <input className='input' type="email" name="useremail"/>
            <br />
            <label>Password</label>
            <br />
            <input className='input' type="text" name="password"/>
            <br />
            <button className='btn'>CREATE</button>

            <p>Already a user ? Sign In</p>
            </div>
        </div>
    )
}

export default SIGNUP
