import { Link, useParams } from 'react-router-dom'

export default function About({ items, userID }) {
    const { itemId } = useParams()
    const { img, title, type, price } = items.length
        ? items.find((item) => item.id === itemId)
        : {}

    return items.length ? (
        <div className="min-w-[300px] py-[26px] ml-10 pr-5 sm:ml-0">
            <Link to={'/'}>
                <img src="/icons/back.svg" className="inline-block w-5" />
                <span> back </span>
            </Link>
            <div className="flex flex-col sm:flex-reverse mt-5">
                <div className="flex mb-10 gap-x-2 sm:gap-x-8">
                    <div className="flex flex-col w-12 gap-y-5">
                        <img className="bg-red-200 rounded-lg" src={img} />
                        <img className="bg-red-200 rounded-lg" src={img} />
                        <img className="bg-red-200 rounded-lg" src={img} />
                    </div>
                    <img
                        src={img}
                        className="bg-red-200 rounded-lg object-contain"
                    />
                </div>
                <div className="max-w-lg">
                    <h1 className="text-2xl font-semibold">{title}</h1>
                    <h3 className="text-sm text-slate-400">{type}</h3>
                    <p className="my-5">
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
        <h1 className="mt-[26px]">loading kak...</h1>
    )
}
