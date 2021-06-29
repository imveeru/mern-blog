import React,{useRef} from 'react'
import './login.css'
import {FaKey,FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Login() {

    const userRef=useRef();
    const passwordRef=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="login">
            <div className='loginHeader'>
                <span className='headerTitle'>Write.</span>
                <span className='headerSubtitle'>Share your notion.</span>
            </div>
            <div className='loginFormWrapper'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label><FaUserAlt className='loginIcons'/> Username</label>
                <input type='text' placeholder='John Doe' ref={userRef} autoFocus></input>
                <label><FaKey className='loginIcons'/> Password</label>
                <input type='password' placeholder='*******' ref={passwordRef}></input>
                <div className='btnsWrapper'>
                    <button type='submit' className='loginButton'>Login</button>
                    <span className='loginRegisterButton'><Link to='/register' style={{textDecoration: 'none',color:'inherit'}}>New User? Click Here!</Link></span>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login
