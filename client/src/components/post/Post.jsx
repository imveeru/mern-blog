import React from 'react'
import './post.css'

function Post() {
    return (
        <div className="post">
            <img
                className="postImg" 
                src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                alt='postImg'
            />
            <div className='postInfo'>
                <div className='cats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>Hello World!</span>
                <hr/>
                <span className='postDate'>1 hour ago</span>
                <p className='postDesc'>Officia ipsum duis aute eiusmod ea exercitation elit non esse sint. Non minim ad occaecat proident cillum occaecat anim cillum do anim ullamco. Ea ex fugiat minim et pariatur proident commodo laborum qui. Aute elit duis irure laborum aliqua fugiat amet aliqua. Cillum proident ut proident pariatur ex magna eiusmod anim.Officia ipsum duis aute eiusmod ea exercitation elit non esse sint. Non minim ad occaecat proident cillum occaecat anim cillum do anim ullamco. Ea ex fugiat minim et pariatur proident commodo laborum qui. Aute elit duis irure laborum aliqua fugiat amet aliqua. Cillum proident ut proident pariatur ex magna eiusmod anim.Officia ipsum duis aute eiusmod ea exercitation elit non esse sint. Non minim ad occaecat proident cillum occaecat anim cillum do anim ullamco. Ea ex fugiat minim et pariatur proident commodo laborum qui. Aute elit duis irure laborum aliqua fugiat amet aliqua. Cillum proident ut proident pariatur ex magna eiusmod anim.Officia ipsum duis aute eiusmod ea exercitation elit non esse sint. Non minim ad occaecat proident cillum occaecat anim cillum do anim ullamco. Ea ex fugiat minim et pariatur proident commodo laborum qui. Aute elit duis irure laborum aliqua fugiat amet aliqua. Cillum proident ut proident pariatur ex magna eiusmod anim.Officia ipsum duis aute eiusmod ea exercitation elit non esse sint. Non minim ad occaecat proident cillum occaecat anim cillum do anim ullamco. Ea ex fugiat minim et pariatur proident commodo laborum qui. Aute elit duis irure laborum aliqua fugiat amet aliqua. Cillum proident ut proident pariatur ex magna eiusmod anim.Officia ipsum duis aute eiusmod ea exercitation elit non esse sint. Non minim ad occaecat proident cillum occaecat anim cillum do anim ullamco. Ea ex fugiat minim et pariatur proident commodo laborum qui. Aute elit duis irure laborum aliqua fugiat amet aliqua. Cillum proident ut proident pariatur ex magna eiusmod anim.</p>
            </div>
        </div>
    )
}

export default Post