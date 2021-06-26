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
                    src='https://lh3.googleusercontent.com/proxy/wHPHiR8ZQIMWy7F30YY8K94PhnFf8zuf-rRFixhpGQGk1jZ9WW2PAznwkflBvaj0Q8WZ-tToV3YlIoehj0eUdb4j6jkp4zggsQ'
                    alt='profile'
                />
                <ImSearch className='searchicon' size='1.3em'/>
            </div>
        </div>
    )
}

export default NavBar
