import React from 'react'

export default function Login() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <form className='flex flex-col'>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
