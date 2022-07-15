import { Link, useParams } from 'react-router-dom'

export default function About({ items }) {
    const { id } = useParams()
    const refItem = items.find((item) => item.id == id)

    return (
        <div className="w-11/12 py-[26px]">
            <Link to="/">
                <img src="/icons/back-btn.svg" className="inline-block w-5" />
                <span> back </span>
            </Link>
            <div className="flex items-center mt-5">
                <div className="flex flex-col max-w-[45px] gap-y-5">
                    <img className='bg-white rounded-lg' src={refItem.img} />
                    <img className='bg-white rounded-lg' src={refItem.img} />
                    <img className='bg-white rounded-lg' src={refItem.img} />
                </div>
                <img src={refItem.img} />
            </div>
        </div>
    )
}
