import React,{useEffect,useState,useContext} from 'react'
import {useLocation} from 'react-router'
import './singlePost.css'
import {GrEdit} from 'react-icons/gr'
import {RiDeleteBin6Line} from 'react-icons/ri'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Context} from '../../context/Context'
import {toast,Toaster} from 'react-hot-toast'

function SinglePost() {

    const PF="https://write-blog-veeru.herokuapp.com/images/" // images path

    const location=useLocation()
    const path=location.pathname.split('/')[2]
    const [post,setPost]=useState([])

    const[title,setTitle]=useState('')
    const[desc,setDesc]=useState('')
    const[updateMode,setUpdateMode]=useState(false)

    useEffect(() => {
        const fetchPost = async()=>{
            const res= await axios.get(`/api/posts/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        fetchPost()
    }, [path])

    console.log(post)

    const {user} = useContext(Context)

    const handleDelete=async ()=>{
        try{
            await axios.delete(`/api/posts/${path}`,{
                data:{username:user.username} // data cannot be passed directly
            })
            window.location.replace('/')
        }catch(err){
            toast.error('An error occurred!')
        }
    }

    const handleUpdate=async ()=>{
        try{
            await axios.put(`/api/posts/${path}`,{
                username:user.username,title,desc // data can be passed directly
            })
            setUpdateMode(false)
            toast.success('Post updated successfully!')
            // window.location.reload('/')
        }catch(err){
            toast.error('An error occurred!')
        }
    }

    return (
        <div className="singlePost">
            <div className='singlePostWrapper'>
            <Toaster/>
                {post.photo && (
                    <img
                    className='singlePostImg'
                    src={PF+post.photo}
                    alt='PostImg'
                />
                )}
                
                {updateMode?<input type='text' value={title} className='singlePostTitleInput' autoFocus onChange={e=>setTitle(e.target.value)}></input>: 
                    (<h1 className='singlePostTitle'>{title}
                        {post.username===user?.username&&
                        <div className='singlePostEdit'>
                            <GrEdit className='singlePostIcon' onClick={()=>setUpdateMode(true)}/>
                            <RiDeleteBin6Line className='singlePostIcon' onClick={handleDelete}/>
                        </div>
                        }
                    </h1>)
                }
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : <Link to={`/?user=${post.username}`} style={{textDecoration: 'none',color: 'inherit'}}><b>{post.username}</b></Link></span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>

                {updateMode?<textarea rows='30' cols='90' value={desc} className='singlePostDescInput' onChange={e=>setDesc(e.target.value)}></textarea>:
                    (<p className='singlePostDesc'>
                        {desc}
                    </p>)
                }

                {updateMode&&
                <button className='singlePostBtn' onClick={handleUpdate}>Update</button>
                }

            </div>
        </div>
    )
}

export default SinglePost
