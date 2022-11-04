import { createContext, useState } from "react";
import './auth.css'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [likeState, setLikeState] = useState(false);
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const [loggedIn, setLoggedIn] = useState(!!token)
    const logIn = (token) => {
        window.localStorage.setItem('token', token)
        setLoggedIn(true)
        setToken(token)
    }
    const logOut = () => {
        window.localStorage.removeItem('token')
        setLoggedIn(false)
        setToken('')
    }
     
        const handleClick = () => {
        setLikeState(likeState => !likeState);

    }
    
        console.log(handleClick)
    
    return (
        <AuthContext.Provider value={{
            loggedIn,
            token,
            logIn,
            logOut,
            handleClick,
            likeState,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider