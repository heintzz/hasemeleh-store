import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Container({ children }) {
    const { isModalOpen } = useContext(AppContext)
    return (
        <div
            className={`bg-slate-100 ${
                isModalOpen ? 'max-h-screen overflow-hidden' : 'min-h-screen'
            } box-border`}
        >
            <div className="max-w-7xl mx-auto flex font-mono px-5">
                {children}
            </div>
        </div>
    )
}
