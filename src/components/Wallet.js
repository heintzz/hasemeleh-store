import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

export default function Wallet() {
    const { balance, isLogin } = useContext(AppContext)
    
    return isLogin ? (
        <div className="absolute top-0 left-12 h-52 w-60 p-5">
            <div className="flex items-center gap-x-3 animate-pulse">
                <div className="h-10 w-10 rounded-full bg-slate-50"></div>
                <div>
                    <div className="mb-2 h-3 w-20 bg-slate-50 rounded-lg"></div>
                    <div className="h-3 w-20 bg-slate-50 rounded-lg"></div>
                </div>
            </div>
            <div className="mt-10 w-40 text-xs">
                <h1>Cash Balance</h1>
                <p className="text-xl">{`$ ${balance}`}</p>
            </div>
        </div>
    ) : (
        <p className="absolute top-0 left-12 w-40">
            <Link to="/login" className='underline text-blue-800'>Login</Link> first.
        </p>
    )
}
