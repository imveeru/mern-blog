import React,{useContext,useState} from 'react'
import './settings.css'
import {BiImageAlt} from 'react-icons/bi'
import {Context} from '../../context/Context'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function Settings() {

    const [file,setFile]=useState(null)
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[success,setSuccess]=useState(false)
    
    const {user} = useContext(Context)

    const handleSubmit=async (e) =>{
        e.preventDefault()

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
            await axios.put('/users/'+user._id,updatedUser)
            setSuccess(true)
            // console.log(updatedUser);
            // console.log(user._id)
            success&&toast.success('Updated Successfully!',{duration:3000})
            // window.location.replace('/post/'+res.data._id)
        }catch(err){
            setSuccess(false)
            toast.error('An error occurred!',{duration:3000})
        }
    }

    return (
        <div className="settings">
            <div className='settingsWrapper'>
            <Toaster/>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Profile</span>
                    <span className='settingsDeleteTitle'>Delete Your Profile</span>
                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img 
                            className=''
                            src={file?URL.createObjectURL(file):user.profilePic}
                            alt='userProfilePic'
                        />
                        <label htmlFor='fileInput'><BiImageAlt className='settingsPPIcon'/>.</label>
                        <input type='file' id='fileInput' style={{display:'none'}} onChange={e=>{setFile(e.target.files[0])}}></input>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>eMail</label>
                    <input type='email' placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type='password' placeholder='**********' onChange={e=>setPassword(e.target.value)}/>
                    <button className='settingsSubmit' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Settings
