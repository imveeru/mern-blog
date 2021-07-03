import React,{useState} from 'react'
import './register.css'
import {FaKey,FaUserAlt} from 'react-icons/fa'
import {HiMail} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Register() {

    const [username,setUsername] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [error,setError]=useState(false)

    const handleSubmit=async (e) =>{
        e.preventDefault();
        //console.log(username,email,password)
        setError(false)
        try{
            const res = await axios.post("/api/auth/register",{
                username,
                email,
                password,
            });
            //console.log(res)
            res.data&&window.location.replace('/login');
            toast.success('Successfully Registered!')
        }catch(err){
            setError(true)
            error&&toast.error('Username or eMail already in use!')
        }
    }

    return (
        <div className="register">
            <div><Toaster/></div>
            <div className='registerHeader'>
                <span className='headerTitle'>Write.</span>
                <span className='headerSubtitle'>Share your notion.</span>
            </div>
            <div className='registerFormWrapper'>
            <span className='registerTitle'>👋 Welcome!</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label><FaUserAlt className='registerIcons'/> Username</label>
                <input type='text' placeholder='John Doe' autoFocus onChange={e=>setUsername(e.target.value)}></input>
                <label><HiMail className='registerIcons'/> eMail</label>
                <input type='email' placeholder='aaa@aaa.com' onChange={e=>setEmail(e.target.value)}></input>
                <label><FaKey className='registerIcons'/> Password</label>
                <input type='password' placeholder='*******' onChange={e=>setPassword(e.target.value)}></input>
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
