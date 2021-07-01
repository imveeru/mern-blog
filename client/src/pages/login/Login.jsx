import React,{useRef,useContext} from 'react'
import './login.css'
import {FaKey,FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Context} from '../../context/Context'
import axios from 'axios'


function Login() {

    const userRef=useRef();
    const passwordRef=useRef();
    const {user,dispatch,isFetching}=useContext(Context)

    const handleSubmit=async (e)=>{
        e.preventDefault();
        dispatch({type:'LOGIN_START'})
        try{
            const res = await axios.post('/auth/login',{
                username:userRef.current.value,
                password:passwordRef.current.value
            })
            dispatch({type:'LOGIN_SUCCESS',payload:res.data})
        }catch(err){
            dispatch({type:'LOGIN_FAILURE'})
        }   
    }

    console.log(user)

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
                    <button type='submit' className='loginButton' disabled={isFetching}>Login</button>
                    <span className='loginRegisterButton'><Link to='/register' style={{textDecoration: 'none',color:'inherit'}}>New User? Click Here!</Link></span>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login
