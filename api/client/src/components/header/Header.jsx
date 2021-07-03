import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
                <span className='headerTitle'>Write.</span>
                <span className='headerSubtitle'>Share your notion.</span>
                <button href='#' className='expbtn' >Explore More</button>
        </div>
    )
}

export default Header
