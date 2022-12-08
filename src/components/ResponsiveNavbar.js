import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/authContext'
import '../styles/ResponsiveNavbar.css'
import Category from './Category/Category'
import { useEffect, useState } from 'react'

const ResponsiveNavbar = () => {
    const { loggedIn } = useContext(AuthContext)
    const { logOut } = useContext(AuthContext)

    const [categories, setCategories] = useState()
    useEffect(() => {
        const getCategories = async () => {
            const Category = await fetch('http://localhost:3000/category', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Category.json()
            console.log(json)
            // window.alert(json.messages)
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCategories()
    }, [])

    return (
        <>
        <div className="itemDropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </button>
                <div className="dropdown-menu">
                    <div id="post">
                        {categories?.length > 0 && (
                            <ul id='ulMenu'>
                           {(!loggedIn) ?
                                <>
                                        <Link  className="link dropdown-item" to={'/signup'}>Sign Up</Link>
                                        <Link className="link dropdown-item" to={'/signin'}>Sign In</Link>
                                </> :
                                    <Link onClick={logOut} className="link dropdown-item" to={'/'}>Sign Out</Link>
                                }
                                <Link to='/lostitem'  id="plus-icon" className=" fa-solid fa-circle-plus"></Link>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            {/* <div className="responsiveNavbar dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

                    ResponsiveNavbar
                </button>
                <div className="dropdown-menu">
                    <div id="posts">
                        <ul>
                            {(!loggedIn) ?
                                <>
                                    <li>
                                        <Link  className="link dropdown-item" to={'/signup'}>Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link className="link dropdown-item" to={'/signin'}>Sign In</Link>
                                    </li>
                                </> :
                                <li>
                                    <a onClick={logOut} className="link dropdown-item" to={'/'}>Sign Out</a>
                                </li>}
                            <li>
                                <Link to='/lostitem'  id="key-icon" className="dropdown-item fa-solid fa-circle-plus"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default ResponsiveNavbar