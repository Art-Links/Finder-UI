import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = () => {
   
   
    return (
        <header>
            <nav class="navbar1">
                <ul>
                    <li>
                        {/* <a class="link" href="">SignUp</a> */}
                        <Link class="link" to={'/signup'}>signup</Link>
                    </li>
                    <li>
                        <a class="link" href="">Images</a>
                    </li>
                    {/* <li>
                        <div class="circle-shadow">
                            <a class="menu-icon" href=""><i class="fas fa-bars"></i></a>
                        </div>
                    </li> */}
                    <li>
                        <div class="circle-shadow">
                            <a class="user-icon" href=""><span>E</span></a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar