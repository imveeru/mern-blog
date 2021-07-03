import React,{useContext,useState} from 'react'
import './settings.css'
import {BiImageAlt} from 'react-icons/bi'
import {Context} from '../../context/Context'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Settings() {

    const {user,dispatch} = useContext(Context)

    const [file,setFile]=useState(null)
    const[username,setUsername]=useState(user.username)
    const[email,setEmail]=useState(user.email)
    const[password,setPassword]=useState('')
    const[success,setSuccess]=useState(false)

    //console.log(user._id);

    const PF='http://localhost:5000/images/'

    const handleSubmit=async (e) =>{
        e.preventDefault()

        dispatch({type:'UPDATE_START'})

        const updatedUser={
            userId:user._id,
            username,
            email,
            password
        }

        if(file){
            const data= new FormData();
            const fileName=Date.now()+file.name;
            data.append("name",fileName)
            data.append("file",file)
            updatedUser.profilePic=fileName;

            try{
                await axios.post('/upload',data)
            }
            catch(err){

            }
        }

        try{
            const res=await axios.put('/users/'+user._id,updatedUser)
            setSuccess(true)
            dispatch({type:'UPDATE_SUCCESS',payload:res.data})
            // console.log(updatedUser);
            // console.log(user._id)
            toast.success('Updated Successfully!',{duration:3000})
            // window.location.replace('/post/'+res.data._id)
        }catch(err){
            setSuccess(false)
            dispatch({type:'UPDATE_FAILURE'})
            toast.error('An error occurred!',{duration:3000})
        }
    }

    const handleDelete=async ()=>{
        try{
            await axios.delete(`/users/${user._id}`,{
                data:{
                    userId:user._id,
                    username:username,
                    password:password
                } // data cannot be passed directly
            })
            //window.location.replace('/')
            toast('User has been deleted!',{icon:'🥀'})
            dispatch({type:"LOGOUT"})
        }catch(err){
            toast.error('An error occurred!')
        }
    }

    return (
        <div className="settings">
            <div className='settingsWrapper'>
            <Toaster/>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Profile</span>
                    <span className='settingsDeleteTitle' onClick={handleDelete}>Delete Your Profile</span>
                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img 
                            className=''
                            src={file?URL.createObjectURL(file):PF+user.profilePic}
                            alt='😎'
                        />
                        <label htmlFor='fileInput'><BiImageAlt className='settingsPPIcon'/>.</label>
                        <input type='file' id='fileInput' style={{display:'none'}} onChange={e=>{setFile(e.target.files[0])}}></input>
                    </div>
                    <label>Username</label>
                    <input type='text' value={username} placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                    <label>eMail</label>
                    <input type='email' value={email} placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
                    <label>Password<small>*</small></label>
                    <input type='password' placeholder='**********' onChange={e=>setPassword(e.target.value)} required />
                    <button className='settingsSubmit' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Settings
