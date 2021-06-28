import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router'
import './singlePost.css'
import {GrEdit} from 'react-icons/gr'
import {RiDeleteBin6Line} from 'react-icons/ri'
import axios from 'axios'

function SinglePost() {

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

    return (
        <div className="singlePost">
            <div className='singlePostWrapper'>
                {post.photo && (
                    <img
                    className='singlePostImg'
                    src={post.photo}
                    alt='PostImg'
                />
                )}
                
                <h1 className='singlePostTitle'>{post.title}
                    <div className='singlePostEdit'>
                        <GrEdit className='singlePostIcon'/>
                        <RiDeleteBin6Line className='singlePostIcon'/>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : <b>{post.username}</b></span>
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
