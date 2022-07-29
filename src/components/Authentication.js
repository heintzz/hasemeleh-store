import Move from './Move'
import ErrorMessage from './ErrorMessage'
import { useRef, useState } from 'react'
import { auth, db } from '../config/firebase-config'
import { Link } from 'react-router-dom'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import SuccessMessage from './SuccessMessage'

export default function Authentication({ authType, isLogin, setIsLogin }) {
    const [errorType, setErrorType] = useState()
    const [showError, setShowError] = useState(false)
    const [success, setSuccess] = useState(false)

    const usersRef = collection(db, 'users')
    let pathSignup =
        errorType !== undefined && !errorType ? '/login' : '/signup'

    let pathLogin = isLogin ? '/' : '/login'
    let path = authType === 'Login' ? pathLogin : pathSignup

    const authenticationHandler = useRef(null)
    const onAuthentication = () => {
        let email = authenticationHandler.current.email.value
        let password = authenticationHandler.current.password.value

        if (authType === 'Login') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user.uid
                    const newDate = Date.parse(new Date())

                    window.localStorage.setItem('isLogin', true)
                    window.localStorage.setItem('id', user)
                    window.localStorage.setItem('time', newDate)

                    setIsLogin(
                        JSON.parse(window.localStorage.getItem('isLogin'))
                    )
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 3500)
                })
                .catch((err) => {
                    setErrorType(err.code)
                    setSuccess(false)
                    setShowError(true)
                    setTimeout(() => {
                        setShowError(false)
                    }, 1500)
                })
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user.uid
                    await addDoc(usersRef, { userID: user, carts: [] })
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                    }, 3500)
                })
                .catch((err) => {
                    setErrorType(err.code)
                    setSuccess(false)
                    setShowError(true)
                    setTimeout(() => {
                        setShowError(false)
                    }, 1500)
                })
        }
    }
    console.log(showError, success, )
    return (
        <div className="h-screen w-screen flex flex-col gap-y-5 items-center justify-center">
            <form
                className="flex flex-col w-64 md:w-80"
                ref={authenticationHandler}
            >
                <label htmlFor="email" className="my-3">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-lg pl-2 py-1"
                    placeholder="hash@gmail.com"
                />
                <label htmlFor="password" className="my-3">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="on"
                    className="rounded-lg pl-2 py-1"
                    placeholder="••••••••"
                />
                {showError && !success && (
                    <ErrorMessage type={errorType} authType={authType} />
                )}
                {!showError && success && (
                    <SuccessMessage authType={authType} />
                )}
                <Link
                    to={path}
                    type="submit"
                    onClick={onAuthentication}
                    className="bg-blue-400 text-white rounded-lg mt-5 px-2 w-fit place-self-end"
                >
                    {authType}
                </Link>
            </form>
            <Move authType={authType} />
        </div>
    )
}
