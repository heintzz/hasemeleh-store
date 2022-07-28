import React from 'react'

const SkeletonCarts = () => {
    return (
        <div className="h-24 py-2 rounded-lg mb-5">
            <div className="mb-5 flex h-24 items-center gap-x-5 rounded-lg bg-slate-300 py-2 last:mb-0">
                <div className="mx-4 h-14 w-20 lg:h-[70px] lg:w-20 max-w-[80px] bg-slate-200 rounded-lg"></div>
                <div className="w-8/12 animate-pulse">
                    <div className="h-2 w-[75%] lg:w-[50%] bg-slate-200 mb-2 rounded-lg"></div>
                    <div className="h-2 w-[50%] lg:w-[35%] bg-slate-200 rounded-lg mb-3"></div>
                    <div className="h-2 w-[35%] lg:w-[20%] bg-slate-200 rounded-lg mr-3"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonCarts
