import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../myimages/Logo.png'





const Navbar = () => {



    return (
        <header>
            <nav class="navbar1 d-flex">
                <div id='div-logo'>
                    <img class="logo-img" src={Logo} alt="" />
                </div>
                <ul>
                    <li>
                        {/* <a class="link" href="">SignUp</a> */}
                        <Link class="link" to={'/signup'}>SignUp</Link>
                    </li>
                    <li>
                        <Link class="link" to={'/signin'}>SignIn</Link>
                    </li>
                    {/* <li>
                        <div class="circle-shadow">
                            <a class="menu-icon" href=""><i class="fas fa-bars"></i></a>
                        </div>
                    </li> */}
                    <li>
                        <Link to={''} id="key-icon" class="fa-solid fa-circle-plus"> add</Link>
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