import React from 'react'

const ErrorMessage = ({ type, authType }) => {
    switch (authType) {
        case 'Sign up':
            switch (type) {
                case 'auth/invalid-email':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            invalid email
                        </div>
                    )
                case 'auth/missing-email':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            enter your email
                        </div>
                    )
                case 'auth/internal-error':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            please fill both email and password
                        </div>
                    )
                case 'auth/email-already-in-use':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            account already registered, please login
                        </div>
                    )
                case 'auth/weak-password':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            password has to be more than 6 characters
                        </div>
                    )
            }
            break

        case 'Login':
            switch (type) {
                case 'auth/invalid-email':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            invalid email
                        </div>
                    )
                case 'auth/wrong-password':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            wrong password
                        </div>
                    )
                case 'auth/user-not-found':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-400 text-white w-fit">
                            user not found, please signup
                        </div>
                    )
            }
            break
    }
}

export default ErrorMessage
