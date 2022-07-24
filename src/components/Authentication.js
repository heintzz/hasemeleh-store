import { useRef, useState } from 'react'
import { auth, db } from '../config/firebase-config'
import { Link } from 'react-router-dom'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

export default function Authentication({ authType }) {
    console.log(authType)
    const [isLogin, setIsLogin] = useState(false)
    const path = authType === 'Login' ? (isLogin ? '/home' : '/') : '/'

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
                        setIsLogin(true)
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
            <p>
                {authType === 'Login'
                    ? 'Have an account already? '
                    : `Don't have an account? `}
                <Link to={authType === 'Login' ? '/signup' : '/'}>
                    {authType === 'Login' ? 'Sign up' : 'Login'}
                </Link>
            </p>
        </div>
    )
}
