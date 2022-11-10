import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../myimages/Logo.png'
import { useContext } from 'react'
import {AuthContext} from '../AuthContext/authContext'





const Navbar = () => {
    const {loggedIn} = useContext(AuthContext)
    console.log("Signed in at navbar",loggedIn)
    return (
        <header>
            <nav class="navbar1 d-flex">
                <div id='div-logo'>
                    <img class="logo-img" src={Logo} alt="" />
                </div>
                <ul>
                    {(!loggedIn)?
                    <>
                    <li>
                        {/* <a class="link" href="">SignUp</a> */}
                        <Link class="link" to={'/signup'}>Sign Up</Link>
                    </li>
                    <li>
                        <Link class="link" to={'/signin'}>Sign In</Link>
                    </li>
                    </>:
                    <li>
                        <Link class="link" to={'/signOut'}>Sign Out</Link>
                    </li>}
                    {/* <li>
                        <div class="circle-shadow">
                            <a class="menu-icon" href=""><i class="fas fa-bars"></i></a>
                        </div>
                    </li> */}
                    <li>
                        <Link to={''} id="key-icon" class="fa-solid fa-circle-plus"></Link>
                    </li>
                    <li>
                        <div class="circle-shadow">
                            <Link to='/profile' class="user-icon" href=""><span>E</span></Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Navbar