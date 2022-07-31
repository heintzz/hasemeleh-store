import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppContext from '../context/AppContext'
import back from '../icons/back.svg'
import SkeletonAbout from '../skeletons/About/SkeletonAbout'

export default function Detail() {
    const {items} = useContext(AppContext)
    const { itemId } = useParams()
    const { img, title, type, price } = items.length
        ? items.find((item) => item.id === itemId)
        : {}
    
    return items.length ? (
        <div className="w-11/12 max-w-4xl mt-[26px] ml-10">
            <Link to="/" className="flex items-center gap-x-2">
                <img src={back} alt="back button" />
                <span> back </span>
            </Link>
            <div className="flex flex-col sm:flex-reverse mt-5">
                <div className="flex mb-10 gap-x-2 max-w-md sm:gap-x-8">
                    <div className="hidden sm:flex flex-col w-12 gap-y-5 ">
                        {[1, 2, 3].map((n) => (
                            <img
                                src={img}
                                alt="demo item"
                                className="bg-red-200 rounded-lg"
                            />
                        ))}
                    </div>
                    <img
                        src={img}
                        alt={title}
                        className="bg-red-200 rounded-lg object-contain min-w-[170px] w-[50%] sm:w-7/12"
                    />
                </div>
                <div>
                    <h1 className="text-sm md:text-2xl font-semibold">{title}</h1>
                    <h3 className="text-xs md:text-sm text-slate-400">{type}</h3>
                    <p className="my-5 text-xs">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure esse ducimus impedit, omnis nam facere sequi
                        doloribus accusantium et libero rerum. Libero itaque
                        laudantium quia quam, soluta voluptate natus veritatis
                        fugit esse optio placeat eveniet est deserunt maxime
                        molestias alias quaerat? Nesciunt natus vero soluta
                        rerum labore, optio, numquam harum libero voluptatibus
                        non, quas delectus?
                    </p>
                    <p className="font-semibold">{price}</p>
                </div>
            </div>
        </div>
    ) : (
        <SkeletonAbout />
    )
}
