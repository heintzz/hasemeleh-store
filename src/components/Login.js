import React from 'react'
import Authentication from './Authentication'

export default function Login({ isLogin, setIsLogin}) {
    return (
        <Authentication
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            authType="Login"
        />
    )
}
