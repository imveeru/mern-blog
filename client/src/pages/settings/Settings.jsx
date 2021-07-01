import React,{useContext} from 'react'
import './settings.css'
import {BiImageAlt} from 'react-icons/bi'
import {Context} from '../../context/Context'

function Settings() {

    const {user} = useContext(Context)

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
                            src={user.profilePic}
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
