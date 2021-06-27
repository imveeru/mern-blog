import React from 'react'
import './navbar.css'
import {ImPen,ImSearch} from 'react-icons/im'
import {Link} from 'react-router-dom'

function NavBar() {

    const userLoggedIn=false;

    return (
        <div className='navbar'>

            <div className='topleft'>
                <ImPen size='1.3em'/>
                <span className='blogtitle'>Write.</span>
            </div>

            <div className='topcenter'>
                <ul className="navlist">
                    <li className='navitem'>
                        <Link to='/' style={{textDecoration: 'none',color:'inherit'}}>HOME</Link>
                    </li>
                    <li className='navitem'>
                        <Link to='/' style={{textDecoration: 'none',color:'inherit'}}>ABOUT</Link>
                    </li>
                    <li className='navitem'>
                        <Link to='/' style={{textDecoration: 'none',color:'inherit'}}>CONTACT</Link>
                    </li>
                    <li className='navitem'>
                        <Link to='/write' style={{textDecoration: 'none',color:'inherit'}}>CREATE</Link>
                    </li>
                    <li className='navitem'>
                        {userLoggedIn?'LOGOUT':<Link to='/register' style={{textDecoration: 'none',color:'inherit'}}>REGISTER</Link>}
                    </li>
                </ul>
            </div>

            <div className='topright'>
                {userLoggedIn?
                    (
                        <img 
                            className='userimg'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                            alt='profileImg'
                        />
                    ): null
                }
                
                <ImSearch className='searchicon' size='1.3em'/>
            </div>
        </div>
    )
}

export default NavBar
