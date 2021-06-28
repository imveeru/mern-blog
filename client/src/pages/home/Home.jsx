import React,{useState,useEffect} from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import axios from 'axios'

function Home() {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const fetchPosts=async ()=>{
            const res = await axios.get("/posts")
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    console.log(posts)

    return (
        <>
            <Header/>
            <div className='home'>
                <Posts key={posts._id} posts={posts}/>
            </div>
        </>
    )
}

export default Home
