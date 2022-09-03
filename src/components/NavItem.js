import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import open from '../icons/menu.svg'
import close from '../icons/close.svg'
import store from '../icons/store-front.svg'
import bag from '../icons/bag-handle.svg'
import logout from '../icons/logout.svg'
import Wallet from './Wallet'
import CartModal from './CartModal'
import AppContext from '../context/AppContext'

export default function NavItem({isOpen, setIsOpen, type}) {
    const className = type === "open" ? 'w-80' : ''
    const { carts, isLogin, isLoading, isModalOpen, showModal, changeLogin } = useContext(AppContext)
    const info = carts?.reduce(
        (acc, cur) => {
            acc.total += cur.amount
            acc.price += cur.price * cur.amount
            return acc
        },
        { total: null, price: 0 }
    )

    return (
        <div className="w-10">
            <div
                className={`fixed z-10 flex flex-col items-start inset-y-5 gap-y-6 p-2 rounded-r-xl bg-blue-100 ${className}`}
            >
                <div className="relative hover:cursor-pointer">
                    <img
                        src={isOpen ? close : open}
                        alt="open close button"
                        onClick={
                            isLoading ? '' : () => setIsOpen((prev) => !prev)
                        }
                    />
                    {isOpen && <Wallet />}
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
                        onClick={
                            isLoading
                                ? ''
                                : function() {
                                      showModal(true)
                                      setIsOpen(false)
                                  }
                        }
                    />
                    {carts.length && isLogin && !isLoading ? (
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

                            changeLogin(false)
                        }}
                    />
                </Link>
            </div>
            <AnimatePresence exitBeforeEnter={true}>
                {isModalOpen && <CartModal price={info.price} />}
            </AnimatePresence>
        </div>
    )
}
