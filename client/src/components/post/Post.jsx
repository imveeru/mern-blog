import React from 'react'
import './post.css'
import {Link} from 'react-router-dom'

function Post({post}) {

    const PF="http://localhost:5000/images/" // images path

    return (
        <div className="post">
            {post.photo&&(
                <img
                className="postImg" 
                src={PF+post.photo}
                alt='postImg'
            />
            )
            }
            <div className='postInfo'>
                <div className='cats'>
                    {post.categories.map((cat)=>(
                        <Link to={`/post/${cat.name}`} style={{textDecoration: 'none'}} className='postCat'>{cat.name}</Link>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} style={{textDecoration: 'none',color:'inherit'}} className='postTitle'>{post.title}</Link>
                <hr/>
                <span className='postDate'>{new Date(post.createdAt).toDateString()}</span>
                <p className='postDesc'>{post.desc}</p>
            </div>
        </div>
    )
}

export default Post
