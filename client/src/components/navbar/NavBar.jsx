import React,{useContext} from 'react'
import './navbar.css'
import {ImPen,ImSearch} from 'react-icons/im'
import {Link} from 'react-router-dom'
import {Context} from '../../context/Context'

function NavBar() {

    const {user,dispatch}=useContext(Context);

    const PF='http://localhost:5000/images/'

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }

    return (
        <div className='navbar'>
            
            <div className='topleft'>
                <Link to='/' style={{textDecoration: 'none',color:'inherit'}}>
                    <ImPen size='1.3em'/>
                    <span className='blogtitle'>Write.</span>
                </Link>
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
                        {user?
                        (<li className='navitem' onClick={handleLogout}>
                        LOGOUT
                        </li>):
                        (<li className='navitem'> 
                        <Link to='/register' style={{textDecoration: 'none',color:'inherit'}}>REGISTER</Link>
                        </li>)
                        }
                </ul>
            </div>

            <div className='topright'>
                    {user?
                        (
                            <Link to='/settings' style={{textDecoration: 'none',color:'inherit'}}>
                                <img 
                                    className='userimg'
                                    src={PF+user.profilePic}
                                    alt='😎'
                                />
                            </Link>
                        ): null
                    }
                {/* <ImSearch className='searchicon' size='1.3em'/> */}
            </div>
        </div>
    )
}

export default NavBar
