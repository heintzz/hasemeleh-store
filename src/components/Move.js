import React from 'react'
import { Link } from 'react-router-dom'

const Move = ({ authType }) => {
    return authType === 'Login' ? (
        <p>
            Don't have an account?
            <Link to="/signup" className="text-blue-500 underline">
                 Sign Up
            </Link>
        </p>
    ) : (
        <p>
            Have an account already?
            <Link to="/login" className="text-blue-500 underline">
                 Login
            </Link>
        </p>
    )
}

export default Move
