import { useRef, useState } from 'react'
import { auth, db } from '../config/firebase-config'
import { Link } from 'react-router-dom'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import ErrorMessage from './ErrorMessage'

export default function Authentication({ authType, isLogin, setIsLogin }) {
    const [errType, setErrType] = useState()
    const [isSuccess, setIsSuccess] = useState(true)
    const usersRef = collection(db, 'users')
    const path = authType === 'Login' ? (isLogin ? '/' : '/login') : '/login'

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
                        window.localStorage.setItem(
                            'time',
                            Date.parse(new Date())
                        )

                        setIsLogin(
                            JSON.parse(window.localStorage.getItem('isLogin'))
                        )
                    })
                    .catch((err) => {
                        console.log(err.code)
                        setErrType(err.code)
                        setIsSuccess(false)
                        setTimeout(() => {
                            setIsSuccess(true)
                        }, 2000)
                    })

                break
            case 'Sign up':
                createUserWithEmailAndPassword(auth, email, password)
                    .then(async (userCredential) => {
                        const user = userCredential.user.uid
                        await addDoc(usersRef, { userID: user, carts: [] })
                    })
                    .catch((err) => {
                        console.log(err.code)
                        setErrType(err.code)
                        setIsSuccess(false)
                        setTimeout(() => {
                            setIsSuccess(true)
                        }, 2000)
                    })
                break
        }
    }

    return (
        <div className="h-screen w-screen flex flex-col gap-y-5 items-center justify-center">
            <form className="flex flex-col w-80" ref={authButton}>
                <label htmlFor="email" className="my-3">Email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="rounded-lg pl-2"
                    placeholder="hash@gmail.com"
                />
                <label htmlFor="password" className="my-3">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="on"
                    className="rounded-lg pl-2"
                    placeholder="*****"
                />
                {!isSuccess && (
                    <ErrorMessage type={errType} authType={authType} />
                )}
                <Link
                    to={!isSuccess ? path : ''}
                    type="submit"
                    onClick={onAuthentication}
                    className="bg-blue-400 text-white rounded-lg mt-5 px-2 w-fit place-self-end"
                >
                    {authType}
                </Link>
            </form>
            {authType === 'Login' ? (
                <p>
                    Don't have an account? <Link to="/signup" className="text-blue-500 underline">Sign Up</Link>
                </p>
            ) : (
                <p>
                    Have an account already? <Link to="/login" className="text-blue-500 underline">Login</Link>
                </p>
            )}
        </div>
    )
}
