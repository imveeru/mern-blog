import React from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'

function Home() {
    return (
        <>
            <Header/>
            <div className='home'>
                <Posts/>
            </div>
        </>
    )
}

export default Home
