import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ carts, setIsLogin }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const info = carts?.reduce(
        (acc, cur) => {
            acc.total += cur.amount
            acc.price += cur.price * cur.amount
            return acc
        },
        { total: 0, price: 0 }
    )
    // eslint-disable-next-line
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="w-10">
            <div className="fixed flex flex-col items-start inset-y-5 gap-y-6 p-2 rounded-xl bg-blue-100">
                <div className="relative hover:cursor-pointer">
                    {isOpen ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setIsOpen(false)}
                        >
                            <path
                                d="M13.5909 12L18.0441 7.54687C18.2554 7.3359 18.3743 7.04961 18.3745 6.75099C18.3748 6.45237 18.2564 6.16587 18.0455 5.95453C17.8345 5.74319 17.5482 5.62431 17.2496 5.62404C16.951 5.62378 16.6645 5.74215 16.4531 5.95312L12 10.4062L7.54687 5.95312C7.33553 5.74178 7.04888 5.62305 6.75 5.62305C6.45111 5.62305 6.16447 5.74178 5.95312 5.95312C5.74178 6.16447 5.62305 6.45111 5.62305 6.75C5.62305 7.04888 5.74178 7.33553 5.95312 7.54687L10.4062 12L5.95312 16.4531C5.74178 16.6645 5.62305 16.9511 5.62305 17.25C5.62305 17.5489 5.74178 17.8355 5.95312 18.0469C6.16447 18.2582 6.45111 18.3769 6.75 18.3769C7.04888 18.3769 7.33553 18.2582 7.54687 18.0469L12 13.5937L16.4531 18.0469C16.6645 18.2582 16.9511 18.3769 17.25 18.3769C17.5489 18.3769 17.8355 18.2582 18.0469 18.0469C18.2582 17.8355 18.3769 17.5489 18.3769 17.25C18.3769 16.9511 18.2582 16.6645 18.0469 16.4531L13.5909 12Z"
                                fill="#1A1F16"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setIsOpen(true)}
                        >
                            <path
                                d="M4.125 7.125H12H19.875M4.125 12H19.875M4.125 16.875H19.875"
                                stroke="#1A1F16"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </div>
                <img
                    src="/icons/store-front.svg"
                    className="hover:cursor-pointer"
                />
                <div className="relative md:hidden">
                    <img
                        src="/icons/bag-handle.svg"
                        onClick={() => setIsModalOpen(true)}
                    />
                    {!carts && (
                        <div className="absolute top-4 -right-1 w-3 h-3 text-[8px] text-center rounded-lg bg-red-600 text-white">
                            {info.total}
                        </div>
                    )}
                </div>
                <Link to="/login" className="mt-auto">
                    <img
                        src="/icons/logout.svg"
                        className="mt-auto"
                        onClick={() => {
                            window.localStorage.setItem('isLogin', false)
                            window.localStorage.removeItem('id')
                            setIsLogin(
                                JSON.parse(
                                    window.localStorage.getItem('isLogin')
                                )
                            )
                        }}
                    />
                </Link>
            </div>
            <div
                className={`${
                    isModalOpen ? 'flex' : 'hidden'
                } fixed justify-center sm:items-center bg-slate-200 opacity-80 left-0 w-full h-full`}
            >
                <div className="relative w-64 h-96 md:w-96 mt-5 sm:mt-0 bg-white opacity-100 rounded-2xl overflow-scroll">
                    <img
                        src="/icons/close-white.svg"
                        className="absolute top-3 right-3 bg-red-600 w-5 rounded-full text-center"
                        onClick={() => setIsModalOpen(false)}
                    />
                    {carts.map((cart) => (
                        <div className="pl-2 pt-2 flex">
                            <img src={cart.img} className="w-14" />
                            <div className="flex flex-col text-xs py-2 ml-5">
                                <h4 className="mb-3">{cart.title}</h4>
                                <div className="flex items-center justify-between">
                                    <h5>{cart.price}</h5>
                                    <div className="my-1 ml-5">
                                        <button className="px-2 mr-1 rounded-lg bg-black text-white">
                                            -
                                        </button>
                                        <span>{cart.amount}</span>
                                        <button className="px-2 ml-1 rounded-lg bg-black text-white">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="w-fit p-2 rounded-lg mx-4 mt-5 bg-red-200">{`$ ${info.price}`}</div>
                </div>
            </div>
        </div>
    )
}
