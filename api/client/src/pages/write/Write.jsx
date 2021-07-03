import React,{useState,useContext} from 'react'
import './write.css'
import {MdAddCircleOutline} from 'react-icons/md'
import axios from 'axios'
import {Context} from '../../context/Context'

function Write() {

    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    const [file,setFile]=useState(null)
    const {user} = useContext(Context)
 
    const handleSubmit=async (e) =>{
        e.preventDefault()

        const newPost={
            username:user.username,
            title,
            desc,
        }

        if(file){
            const data= new FormData();
            const fileName=Date.now()+file.name;
            data.append("name",fileName)
            data.append("file",file)
            newPost.photo=fileName;

            try{
                await axios.post('/upload',data)
            }
            catch(err){

            }
        }

        try{
            const res= await axios.post('/posts',newPost)
            window.location.replace('/post/'+res.data._id)
        }catch(err){

        }
    }


    return (
        <div className="write">
            {file &&
                <img
                className='writeImg'
                src={URL.createObjectURL(file)}
                alt='postImg'
                />
             }
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <MdAddCircleOutline className="writeIcon" size='1.3em'/>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}} onChange={e=>setFile(e.target.files[0])}></input>
                    <input type="text" placeholder='Title' id='fileInput' className='writeInput' autoFocus onChange={e=>setTitle(e.target.value)}></input>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder='Share your notion...'
                        type='text'
                        className='writeInput writeText'
                        onChange={e=>setDesc(e.target.value)}
                     />
                </div>
                <button className='writeSubmit'>Share</button>
            </form>
        </div>
    )
}

export default Write
