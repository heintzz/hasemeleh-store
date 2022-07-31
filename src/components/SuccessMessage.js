import React from 'react'
const SuccessMessage = ({authType}) => {
    if(authType === 'Login') {
        return (
            <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-blue-400 text-white w-fit">
                Login success, click again to proceed
            </div>
        )
    } else {
        return (
            <div className="absolute top-0 right-5 text-xs py-1 px-2 mt-5 rounded-md bg-blue-400 text-white w-fit">
                Sign up success, please login
            </div>
        )
    }
}

export default SuccessMessage
