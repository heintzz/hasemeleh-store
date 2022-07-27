import React from 'react'

const SkeletonCarts = () => {
    return [1, 2, 3].map((n) => (
        <div className="h-24 py-2 bg-slate-100 rounded-lg mb-5" key={n}>
            <div className="mb-5 flex h-24 items-center gap-x-5 rounded-lg bg-slate-300 py-2 last:mb-0">
                <div className="mx-4 h-12 w-20 lg:h-[70px] lg:w-[70px] max-w-[80px] bg-slate-200 rounded-full"></div>
                <div className="w-8/12">
                    <div className="h-2 lg:h-3 w-[50%] bg-slate-200 mb-2 lg:mb-5 rounded-lg"></div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="h-2 lg:h-3 w-[35%] bg-slate-200 rounded-lg mb-3 lg:mb-0"></div>
                        <div className="h-2 lg:h-3 w-[50%] lg:w-[35%] bg-slate-200 rounded-lg mr-3"></div>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default SkeletonCarts
