import React from 'react'
import './register.css'
import {FaKey,FaUserAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function Register() {
    return (
        <div className="register">
            <div className='registerHeader'>
                <span className='headerTitle'>Write.</span>
                <span className='headerSubtitle'>Share your notion.</span>
            </div>
            <div className='registerFormWrapper'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm'>
                <label><FaUserAlt className='registerIcons'/> Username</label>
                <input type='text' placeholder='John Doe'></input>
                <label><HiMail className='registerIcons'/> eMail</label>
                <input type='email' placeholder='aaa@aaa.com'></input>
                <label><FaKey className='registerIcons'/> Password</label>
                <input type='password' placeholder='*******'></input>
                <div className='btnsWrapper'>
                    <button type='submit' className='registerButton'>Register</button>
                    <span className='registerLoginButton'><Link to='/login' style={{textDecoration: 'none',color:'inherit'}}>Already a user? Click Here!</Link></span>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Register
