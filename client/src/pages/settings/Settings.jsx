import React from 'react'
import './settings.css'
import {BiImageAlt} from 'react-icons/bi'

function Settings() {
    return (
        <div className="settings">
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Profile</span>
                    <span className='settingsDeleteTitle'>Delete Your Profile</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img 
                            className=''
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            alt='userProfilePic'
                        />
                        <label htmlFor='fileInput'><BiImageAlt className='settingsPPIcon'/>.</label>
                        <input type='file' id='fileInput' style={{display:'none'}}></input>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='mano'/>
                    <label>eMail</label>
                    <input type='email' placeholder='mano@mano.com'/>
                    <label>Password</label>
                    <input type='password'/>
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Settings
