import { useRef, useState } from 'react'
import { auth, db } from '../config/firebase-config'
import { Link } from 'react-router-dom'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

export default function Authentication({
    authType,
    isLogin,
    setIsLogin,
}) {
    const path = authType === 'Login' ? (isLogin ? '/' : '/login') : '/login'
    const usersRef = collection(db, 'users')

    const authButton = useRef(null)
    const onAuthentication = (e) => {
        const email = authButton.current.email.value
        const password = authButton.current.password.value

        switch (authType) {
            case 'Login':
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        const user = userCredential.user.uid
                        window.localStorage.setItem('isLogin', true)
                        window.localStorage.setItem('id', user)
                        window.localStorage.setItem('time', Date.parse(new Date ()))

                        setIsLogin(JSON.parse(window.localStorage.getItem('isLogin')))
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })

                break
            case 'Sign up':
                createUserWithEmailAndPassword(auth, email, password)
                    .then(async (userCredential) => {
                        const user = userCredential.user.uid
                        await addDoc(usersRef, { userID: user })
                    })
                    .catch((err) => {
                        console.log(err.message)
                    })
                break
        }
    }

    return (
        <div className="h-screen w-screen flex flex-col gap-y-5 items-center justify-center">
            <form className="flex flex-col" ref={authButton}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="on"
                />
                <Link
                    to={path}
                    type="submit"
                    onClick={onAuthentication}
                    className="bg-blue-400 text-white rounded-lg mt-5 px-2 w-fit place-self-end"
                >
                    {authType}
                </Link>
            </form>
            {authType === 'Login' ? (
                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            ) : (
                <p>
                    Have an account already? <Link to="/login">Login</Link>
                </p>
            )}
        </div>
    )
}
