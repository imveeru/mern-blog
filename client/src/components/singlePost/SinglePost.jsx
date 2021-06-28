import React from 'react'
import './singlePost.css'
import {GrEdit} from 'react-icons/gr'
import {RiDeleteBin6Line} from 'react-icons/ri'

function SinglePost() {

    

    return (
        <div className="singlePost">
            <div className='singlePostWrapper'>
                <img
                    className='singlePostImg'
                    src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                    alt='PostImg'
                />
                <h1 className='singlePostTitle'>Hello World!
                    <div className='singlePostEdit'>
                        <GrEdit className='singlePostIcon'/>
                        <RiDeleteBin6Line className='singlePostIcon'/>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author : <b>John Doe</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.
                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.
                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.
                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.
                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.
                    Consectetur tempor consectetur non deserunt nulla veniam laborum. Mollit sit qui dolore ex anim ullamco nostrud elit irure irure. Amet cupidatat dolore occaecat minim velit nulla enim laborum consequat ipsum laborum cupidatat.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
