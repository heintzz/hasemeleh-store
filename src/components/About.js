import { Link, useParams } from 'react-router-dom'
import SkeletonAbout from '../skeletons/About/SkeletonAbout'

export default function About({ items }) {
    const { itemId } = useParams()
    const { img, title, type, price } = items.length
        ? items.find((item) => item.id === itemId)
        : {}

    return items.length ? (
        <div className="w-11/12 max-w-4xl mt-[26px] pl-10">
            <Link to={'/'} className="flex items-center gap-x-2">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline w-5"
                >
                    <path
                        d="M15.375 5.25L8.625 12L15.375 18.75"
                        stroke="#1A1F16"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span> back </span>
            </Link>
            <div className="flex flex-col sm:flex-reverse mt-5">
                <div className="flex mb-10 gap-x-2 max-w-md sm:gap-x-8">
                    <div className="hidden sm:flex flex-col w-12 gap-y-5 ">
                        <img
                            className="bg-red-200 rounded-lg"
                            src={img}
                            alt={title}
                        />
                        <img
                            className="bg-red-200 rounded-lg"
                            src={img}
                            alt={title}
                        />
                        <img
                            className="bg-red-200 rounded-lg"
                            src={img}
                            alt={title}
                        />
                    </div>
                    <img
                        src={img}
                        alt={title}
                        className="bg-red-200 rounded-lg object-contain min-w-[170px] w-[50%] sm:w-7/12"
                    />
                </div>
                <div>
                    <h1 className="text-sm md:text-2xl font-semibold">
                        {title}
                    </h1>
                    <h3 className="text-xs md:text-sm text-slate-400">
                        {type}
                    </h3>
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
                    <p className="font-semibold">{`$ ${price}`}</p>
                </div>
            </div>
        </div>
    ) : (
        <SkeletonAbout />
    )
}
