import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Wallet() {
    const { balance } = useContext(AppContext)
    return (
        <div class="absolute top-0 left-12 h-52 w-60 p-5">
            <div class="flex items-center gap-x-3 animate-pulse">
                <div class="h-10 w-10 rounded-full bg-slate-50"></div>
                <div>
                    <div class="mb-2 h-3 w-20 bg-slate-50 rounded-lg"></div>
                    <div class="h-3 w-20 bg-slate-50 rounded-lg"></div>
                </div>
            </div>
            <div class="mt-10 w-40 text-xs">
                <h1>Cash Balance</h1>
                <p class="text-xl">{`$ ${balance}`}</p>
            </div>
        </div>
    )
}
