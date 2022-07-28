import { useState } from 'react'
import { Link } from 'react-router-dom'
import open from '../icons/menu.svg'
import close from '../icons/close.svg'
import whiteClose from '../icons/close-white.svg'
import store from '../icons/store-front.svg'
import bag from '../icons/bag-handle.svg'
import logout from '../icons/logout.svg'

export default function Nav({ carts, loading, isLogin, setIsLogin }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const info = carts?.reduce(
        (acc, cur) => {
            acc.total += cur.amount
            acc.price += cur.price * cur.amount
            return acc
        },
        { total: null, price: null }
    )

    return (
        <div className="w-10">
            <div className="fixed flex flex-col items-start inset-y-5 gap-y-6 p-2 rounded-xl bg-blue-100">
                <div className="relative hover:cursor-pointer">
                    <img
                        src={isOpen ? close : open}
                        alt="open close button"
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                </div>
                <img
                    src={store}
                    alt="store button"
                    className="hover:cursor-pointer"
                />
                <div className="relative md:hidden hover:cursor-pointer">
                    <img
                        src={bag}
                        alt="bag button"
                        onClick={() => setIsModalOpen(true)}
                    />
                    {carts.length && isLogin && !loading ? (
                        <div className="absolute top-4 -right-1 w-3 h-3 text-[8px] text-center rounded-lg bg-red-600 text-white">
                            {info.total}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <Link to="/login" className="mt-auto">
                    <img
                        src={logout}
                        alt="logout button"
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
                <div className="relative w-64 h-96 md:w-96 mt-5 sm:mt-0 bg-white opacity-100 rounded-2xl" >
                    <img
                        src={whiteClose}
                        alt="close button"
                        className="absolute top-3 right-3 bg-red-600 w-5 rounded-full text-center hover:cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    />
                    {carts.map((cart) => (
                        <div className="pl-2 pt-2 flex" key={cart.id}>
                            <img
                                src={cart.img}
                                alt={cart.tile}
                                className="w-14 object-contain"
                            />
                            <div className="flex flex-col text-xs py-2 ml-5">
                                <h4 className="mb-3">{cart.title}</h4>
                                <div className="flex items-center justify-between w-full">
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
