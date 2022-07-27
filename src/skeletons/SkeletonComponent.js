import React from 'react'
import ImageSkeleton from './ImageSkeleton'
import Description from './Description'

const SkeletonComponent = () => {
    return (
        <div className="flex w-12/12 flex-wrap bg-slate-100 pt-10 box-border">
            {[1, 2, 3, 4, 5].map((n) => (
                <div
                    className="mb-10 flex flex-col pr-5 w-6/12 lg:w-4/12"
                    key={n}
                >
                    <ImageSkeleton />
                    <Description />
                </div>
            ))}
        </div>
    )
}

export default SkeletonComponent
