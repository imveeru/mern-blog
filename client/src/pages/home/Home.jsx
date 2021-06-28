import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import axios from 'axios'

function Home() {

    const [posts,setPosts]=useState([])
    const {search}=useLocation()

    useEffect(()=>{
        const fetchPosts=async ()=>{
            const res = await axios.get("/posts"+search)
            setPosts(res.data)
        }
        fetchPosts()
    },[search])

    //console.log(posts)

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
