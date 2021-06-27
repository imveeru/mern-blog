import React from 'react'
import './login.css'
import {FaKey} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'

function Login() {
    return (
        <div className="login">
            <div className='loginHeader'>
                <span className='headerTitle'>Write.</span>
                <span className='headerSubtitle'>Share your notion.</span>
            </div>
            <div className='loginFormWrapper'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm'>
                <label><HiMail className='loginIcons'/> eMail</label>
                <input type='email' placeholder='aaa@aaa.com'></input>
                <label><FaKey className='loginIcons'/> Password</label>
                <input type='password' placeholder='*******'></input>
                <div className='btnsWrapper'>
                    <button type='submit' className='loginButton'>Login</button>
                    <span className='loginRegisterButton'>New User? Click Here!</span>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login
