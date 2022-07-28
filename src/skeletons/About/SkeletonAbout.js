import React from 'react'

const SkeletonAbout = () => {
    return (
        <div class="h-36 w-11/12">
            <div class="ml-10 mt-9 h-2 w-10 rounded-lg bg-slate-200"></div>
            <div class="flex mt-5 ml-10">
                <div class="mr-5 hidden sm:inline">
                    <div class="mb-2 h-10 w-10 rounded-lg bg-slate-200"></div>
                    <div class="mb-2 h-10 w-10 rounded-lg bg-slate-200"></div>
                    <div class="h-10 w-10 rounded-lg bg-slate-200"></div>
                </div>
                <div class="h-64 w-60 rounded-lg bg-slate-200"></div>
            </div>
            <div class="ml-10 mb-5 mt-10 h-2 w-3/12 md:w-1/12 rounded-lg bg-slate-200"></div>
            {[1, 2, 3, 4].map((n) => (
                <div
                    key={n}
                    class="ml-10 mb-2 h-2 w-8/12 md:w-6/12 rounded-lg bg-slate-200"
                ></div>
            ))}
            <div class="ml-10 h-2 mt-5 w-4/12 md:w-2/12 rounded-lg bg-slate-200"></div>
        </div>
    )
}

export default SkeletonAbout
