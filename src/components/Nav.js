import { useState } from "react"

export default function Nav() {
    // eslint-disable-next-line
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-1/12">
            <div className="fixed flex flex-col items-start inset-y-5 gap-y-8 p-2 w-10 rounded-lg bg-blue-100 ">
                <div className="relative">
                    <img src={isOpen ? 'icons/close.svg' : 'icons/menu.svg'} alt='open close button' />
                    {/* <img
                        className="bg-slate-600 absolute top-0"
                        src="icons/close.svg"
                    /> */}
                </div>
                <img src="/icons/store-front.svg" />
                <img src="/icons/bag-handle.svg" />
                <img className="mt-auto" src="/icons/logout.svg" />
            </div>
        </div>
    )
}
