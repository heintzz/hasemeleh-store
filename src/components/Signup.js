import React from 'react'
import Authentication from './Authentication'

export default function Signup() {
    return <Authentication authType='Sign up' />
}

// <div className="h-screen w-screen flex flex-col gap-y-5 items-center justify-center">
//     <form className="flex flex-col" ref={loginButton}>
//         <label htmlFor="email">Email: </label>
//         <input type="email" id="email" name="email" />
//         <label htmlFor="password">Password</label>
//         <input
//             type="password"
//             id="password"
//             name="password"
//             autoComplete="on"
//         />
//         <Link
//             to={'/'}
//             type="submit"
//             onClick={mauRegister}
//             className="bg-blue-400 text-white rounded-lg mt-5 px-2 w-fit place-self-end"
//         >
//             Sign Up
//         </Link>
//     </form>
//     <p>
//         Have an account already? <Link to="/">Login</Link>
//     </p>
// </div>