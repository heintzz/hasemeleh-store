import React from 'react'

const SuccessMessage = ({ authType }) => {
    switch (authType) {
        case 'Login':
            return (
                <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-blue-400 text-white w-fit">
                    login success, click again to proceed
                </div>
            )
        case 'Sign up':
            return (
                <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-blue-400 text-white w-fit">
                    sign up success, please login
                </div>
            )
    }
}

export default SuccessMessage
