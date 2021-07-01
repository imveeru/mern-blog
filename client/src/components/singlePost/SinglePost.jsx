import React,{useEffect,useState,useContext} from 'react'
import {useLocation} from 'react-router'
import './singlePost.css'
import {GrEdit} from 'react-icons/gr'
import {RiDeleteBin6Line} from 'react-icons/ri'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Context} from '../../context/Context'

function SinglePost() {

    const PF="http://localhost:5000/images/" // images path

    const location=useLocation()
    const path=location.pathname.split('/')[2]
    const [post,setPost]=useState([])

    useEffect(() => {
        const fetchPost = async()=>{
            const res= await axios.get(`/posts/${path}`)
            setPost(res.data)
        }
        fetchPost()
    }, [path])

    console.log(post)

    const {user} = useContext(Context)

    const handleDelete=async ()=>{
        try{
            await axios.delete(`/posts/${path}`,{
                data:{username:user.username} // data cannot be passed directly
            })
            window.location.replace('/')
        }catch(err){}
    }

    return (
        <div className="singlePost">
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img
                    className='singlePostImg'
                    src={PF+post.photo}
                    alt='PostImg'
                />
                )}
                
                <h1 className='singlePostTitle'>{post.title}
                    {post.username===user?.username&&
                    <div className='singlePostEdit'>
                        <GrEdit className='singlePostIcon'/>
                        <RiDeleteBin6Line className='singlePostIcon' onClick={handleDelete}/>
                    </div>
                    }
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : <Link to={`/?user=${post.username}`} style={{textDecoration: 'none',color: 'inherit'}}><b>{post.username}</b></Link></span>
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesc'>
                    {post.desc}
                </p>
            </div>
        </div>
    )
}

export default SinglePost
