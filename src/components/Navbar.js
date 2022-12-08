import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../myimages/sonlogo.svg'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/authContext'
import Menue from './Menue'
import ResponsiveNavbar from './ResponsiveNavbar'
import '../styles/Navbar.css'

const Navbar = () => {
    const { loggedIn } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext)
    // console.log("Signed in at navbar", loggedIn)
    return (
        <header className='hed'>
            <nav class="navbar d-flex">
                <div id='div-logo'>
                    <Link to={'/'}>
                        <img id="logo-img" src={Logo} alt="" />
                    </Link>
                </div>
                <ul className='ul'>
                    <ResponsiveNavbar />
                    <Menue />
                    {(!loggedIn) ?
                        <>
                            <li className='Signup'>
                                <Link class="link" to={'/signup'}>Sign Up</Link>
                            </li>
                            <li>
                                <Link class="link" to={'/signin'}>Sign In</Link>
                            </li>
                        </> :
                        <li>
                            <Link onClick={logOut} class="link" to={'/signin'}>Sign Out</Link>
                        </li>}
                    <li className='key-icon'>
                        <Link to='/lostitem' id="key-icon" class="fa-solid fa-circle-plus"></Link>
                    </li>
                    
                        <div class="circle-shadow">
                            <Link to='/profile' class="user-icon" href=""><span>E</span></Link>
                        </div>
                    
                </ul>
            </nav>
        </header>
    )
}


export default Navbar