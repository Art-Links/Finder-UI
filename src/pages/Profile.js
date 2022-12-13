import '../styles/Profile.css'
import user from '../myimages/user.png'
import logo2 from '../myimages/sonlogo.svg'
import photo2 from '../myimages/photo2.svg'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect, useContext } from 'react'
import { AuthContext } from "../AuthContext/authContext"
import RequstedAnswers from '../components/RequstedAnswers/RequstedAnswers'





const Profile = () => {
    const { token, user, setUser } = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState({
        userName: "",
        email: "",
        password: "",
        new_password: "",
        new_password_confirmation: ""

    })
    const navigate = useNavigate()
    const { logOut, loggedIn } = useContext(AuthContext)
    useEffect(() => {
        const getMe = async () => {
            const response = await fetch('http://localhost:3000/users', {
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            if (json.success) {
                setCurrentUser({
                    ...currentUser,
                    userName: json?.data?.userName,
                    email: json?.data?.email,
                })
            }
        }
        getMe()
    }, [])


    const updateProfile = async () => {
        setLoading(true)
        const response = await fetch(`http://localhost:3000/users/`, {
            method: 'put',
            body: JSON.stringify(currentUser),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setLoading(false)
        window.alert(json.messages)
        if (json.success) {
            window.alert(json.messages)
            navigate('/')

        }
    }

    const onChangeHandler = (e, field) => {
        setCurrentUser((prev) => {
            return {
                ...currentUser,
                ...field
            }
        })
    }

    // const deletePost = async (id) => {
    //     const response = await fetch(`${process.env.REACT_APP_API}/posts/${id}`, {
    //         method: 'delete',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         }
    //     })
    //     const json = await response.json()
    //     if (json.success) {
    //         const currentPosts = [...currentUser.posts]
    //         const remainedPosts = currentPosts.filter((p) => p.id != id)
    //         setCurrentUser({
    //             ...currentUser,
    //             posts: remainedPosts
    //         })
    //     }
    // }

    return (
        <div>
            <div class='wrapper'>
                <div className='answers'>
                    <img id='personal' src={photo2} alt='' />
                </div>
                <div class='registration-form'>
                    <div id='form-div' className='w-100'>
                        <div className=' mb-4'>
                            <img id='logo2' src={logo2} alt='' />
                        </div>
                        <h1 className='mb-2'>My Profile</h1>
                        <div className='form-field mb-3 d-flex flex-column align-items-start'>
                            <label htmlFor='name' className='mb-2'>Name</label>
                            <input placeholder='Type Your Name' type='text' id="name" value={currentUser?.userName} onChange={(e) => setCurrentUser({ ...currentUser, userName: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='email' className='mb-2'>Email Address</label>
                            <input placeholder='Email Address' type='email' id="email" value={currentUser?.email} onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='Password' className='mb-2'>Password</label>
                            <input placeholder='Your Password' type='password' id="password" onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })} className='form-control' />
                        </div>
                        <div className='form-field mb-3  d-flex flex-column align-items-start'>
                            <label htmlFor='Password' className='mb-2'>NewPassword</label>
                            <input placeholder='Your Password' type='password' id="password" onChange={(e) => setCurrentUser({ ...currentUser, new_password: e.target.value })} className='form-control' />
                        </div>

                        <div className='form-field mb-4  d-flex flex-column align-items-start'>
                            <label htmlFor='password_confirmation' className='mb-2'>Password Confirmation</label>
                            <input placeholder='Password Confirmation' type='password' id="password_confirmation" onChange={(e) => setCurrentUser({ ...currentUser, new_password_confirmation: e.target.value })} className='form-control' />
                        </div>
                        {/* <div className='row'> */}
                        {/* <div className='col-5'>
                        <Link className='btn btn-dark w-100' to='/signin'>Go To Login</Link>
                    </div> */}
                        <div className='col-12 mb-4'>
                            <button onClick={updateProfile} className='btn btn-primary w-100'>{loading ? 'Updateing' : 'Update'}</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile