import { Link, useParams } from 'react-router-dom'

export default function About({ items }) {
    const { id } = useParams()
    const {img, title, type, price} = items.find((item) => item.id === id)

    return (
        <div className="w-11/12 py-[26px]">
            <Link to="/">
                <img src="/icons/back.svg" className="inline-block w-5" />
                <span> back </span>
            </Link>
            <div className="flex mt-5">
                <div className="flex flex-col max-w-[45px] gap-y-5">
                    <img className="bg-red-200  rounded-lg" src={img} />
                    <img className="bg-red-200  rounded-lg" src={img} />
                    <img className="bg-red-200  rounded-lg" src={img} />
                </div>
                <img
                    src={img}
                    className="bg-red-200 rounded-lg mx-5 object-contain"
                />
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
    )
}
