import { useState } from 'react'

export default function Nav({carts}) {
    const total = carts.reduce((acc, cur) => {
        acc += cur.amount
        return acc
    }, 0)
    // eslint-disable-next-line
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-1/12">
            <div className="fixed flex flex-col items-start inset-y-5 gap-y-8 p-2 w-10 rounded-lg bg-blue-100 ">
                <div className="relative">
                    <img
                        src={isOpen ? 'icons/close.svg' : 'icons/menu.svg'}
                        alt="open close button"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    {/* <img
                        className="bg-slate-600 absolute top-0"
                        src="icons/close.svg"
                    /> */}
                </div>
                <img src="/icons/store-front.svg" />
                <div className="relative md:hidden">
                    <img src="/icons/bag-handle.svg" />
                    <div className="absolute top-4 -right-1 w-[14px] h-[14px] text-xs text-center rounded-full bg-white">
                        {total}
                    </div>
                </div>
                <img className="mt-auto" src="/icons/logout.svg" />
            </div>
        </div>
    )
}
