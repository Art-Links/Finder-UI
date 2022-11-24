import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/authContext'
import '../styles/ResponsiveNavbar.css'

const ResponsiveNavbar = () => {
    const { loggedIn } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext)

    return (
        <>
            <div className="responsiveNavbar">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ResponsiveNavbar
                </button>
                <div className="dropdown-menu">
                    <div id="all-posts">

                        <ul>
                            {(!loggedIn) ?
                                <>
                                    <li>
                                        <Link class="link" to={'/signup'}>Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link class="link" to={'/signin'}>Sign In</Link>
                                    </li>
                                </> :
                                <li>
                                    <a onClick={logOut} class="link" to={'/'}>Sign Out</a>
                                </li>}

                            <li>
                                <Link to='/lostitem' id="key-icon" class="fa-solid fa-circle-plus"></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponsiveNavbar