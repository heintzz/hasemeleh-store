import React from 'react'

const ErrorMessage = ({ type, authType }) => {
    console.log(authType)
    switch (authType) {
        case 'Sign up':
            switch (type) {
                case 'auth/invalid-email':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-300 w-fit">
                            invalid email
                        </div>
                    )
                case 'auth/internal-error':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-300 w-fit">
                            please fill both email and password
                        </div>
                    )
                case 'auth/email-already-in-use':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-300 w-fit">
                            account already registered, please login
                        </div>
                    )
            }
        case 'Login':
            switch (type) {
                case 'auth/invalid-email':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-300 w-fit">
                            invalid email
                        </div>
                    )
                case 'auth/wrong-password':
                    return (
                        <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-red-300 w-fit">
                            wrong password
                        </div>
                    )
            }
    }
}

export default ErrorMessage
