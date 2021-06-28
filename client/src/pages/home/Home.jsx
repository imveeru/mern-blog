import React,{useState,useEffect} from 'react'
import './home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import axios from 'axios'

function Home() {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const fetchPosts=async ()=>{
            axios.get("")
        }
    },[])

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
