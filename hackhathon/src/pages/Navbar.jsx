import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <Link to="/signin">SIGN IN</Link>
            <Link to="/signup">SIGN UP</Link>
        </div>
    )
}

export default Navbar
