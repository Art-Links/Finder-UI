import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../myimages/sonlogo.svg'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/authContext'





const Navbar = () => {
    const { loggedIn } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext)
    console.log("Signed in at navbar", loggedIn)
    return (
        <header className='hed'>
            <nav class="navbar1 d-flex">
                <div id='div-logo'>
                    <Link to={'/'}>
                        <img id="logo-img" src={Logo} alt="" />
                    </Link>
                </div>
                <ul>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    {(!loggedIn) ?
                        <>
                            <li>
                                {/* <a class="link" href="">SignUp</a> */}
                                <Link class="link" to={'/signup'}>Sign Up</Link>
                            </li>
                            <li>
                                <Link class="link" to={'/signin'}>Sign In</Link>
                            </li>
                        </> :
                        <li>
                            <a onClick={logOut} class="link" to={'/'}>Sign Out</a>
                        </li>}
                    {/* <li>
                        <div class="circle-shadow">
                            <a class="menu-icon" href=""><i class="fas fa-bars"></i></a>
                        </div>
                    </li> */}
                    <li>
                        <Link to='/lostitem' id="key-icon" class="fa-solid fa-circle-plus"></Link>
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