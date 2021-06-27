import React from 'react'
import './navbar.css'
import {ImPen,ImSearch} from 'react-icons/im'

function NavBar() {
    return (
        <div className='navbar'>

            <div className='topleft'>
                <ImPen size='1.3em'/>
                <span className='blogtitle'>Write.</span>
            </div>

            <div className='topcenter'>
                <ul className="navlist">
                    <li className='navitem'>HOME</li>
                    <li className='navitem'>ABOUT</li>
                    <li className='navitem'>CONTACT</li>
                    <li className='navitem'>CREATE</li>
                    <li className='navitem'>LOGOUT</li>

                </ul>
            </div>

            <div className='topright'>
                <img 
                    className='userimg'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    alt='profileImg'
                />
                <ImSearch className='searchicon' size='1.3em'/>
            </div>
        </div>
    )
}

export default NavBar
