import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
const navigate = useNavigate()
navigate('/profile')

    return (
        <header>
            <nav class="navbar1">
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