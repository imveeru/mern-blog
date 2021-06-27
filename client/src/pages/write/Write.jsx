import React from 'react'
import './write.css'
import {MdAddCircleOutline} from 'react-icons/md'

function Write() {
    return (
        <div className="write">
            <img
                className='writeImg'
                src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                alt='postImg'
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <MdAddCircleOutline className="writeIcon" size='1.3em'/>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}></input>
                    <input type="text" placeholder='Title' id='fileInput' className='writeInput' autoFocus></input>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder='Share your notion...'
                        type='text'
                        className='writeInput writeText'
                     />
                </div>
                <button className='writeSubmit'>Share</button>
            </form>
        </div>
    )
}

export default Write
