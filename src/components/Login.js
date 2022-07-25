import React from 'react'
import Authentication from './Authentication'

export default function Login({ isLogin, setIsLogin, userID, setUserID }) {
    return (
        <Authentication
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            userID={userID}
            setUserID={setUserID}
            authType="Login"
        />
    )
}
