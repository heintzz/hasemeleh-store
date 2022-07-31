import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import loginAdvice from '../icons/login-advice.svg'
import whiteClose from '../icons/close-white.svg'
import arrowDown from '../icons/arrow-down.svg'
import AppContext from '../context/AppContext'

export default function CartModal({ price }) {
    const { carts, isLogin, showModal, increaseHandler, decreaseHandler } = useContext(AppContext)

    const dropIn = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: 'tween',
            },
        },
        exit: {
            scale: 0,
        },
    }

    return (
        <div className="flex fixed justify-center items-center bg-slate-300/80 left-0 w-full h-full md:hidden">
            <motion.div
                className="relative w-80 h-96 md:w-96 bg-slate-100 rounded-2xl overflow-y-auto"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <img
                    src={whiteClose}
                    alt="close button"
                    onClick={() => showModal(false)}
                    className="absolute top-3 right-3 bg-red-600 w-5 rounded-full text-center hover:cursor-pointer"
                />
                {carts.map((cart, time) => (
                    <motion.div 
                    className="pl-2 pt-2 flex border-b" key={cart.id}
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0, transition: {duration: 1, delay: time*0.25}}}>
                        <img
                            src={cart.img}
                            alt={cart.tile}
                            className="w-14 object-contain"
                        />
                        <div className="flex flex-col text-xs py-2 ml-5 w-44 sm:w-52 md:w-60">
                            <h4 className="mb-3">{cart.title}</h4>
                            <div className="flex items-center justify-between">
                                <h5>{cart.price}</h5>
                                <div className="my-1 flex">
                                    <button
                                        className="px-2 rounded-lg bg-black text-white"
                                        onClick={() => decreaseHandler(cart.id)}
                                    >
                                        -
                                    </button>
                                    <div className="mx-1 w-5 text-center">
                                        {cart.amount}
                                    </div>
                                    <button
                                        className="px-2 rounded-lg bg-black text-white"
                                        onClick={() => increaseHandler(cart.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {price ? (
                    <div className="w-fit p-2 rounded-lg mx-4 mt-5 mb-5 bg-blue-400/90 text-white">{`$ ${price}`}</div>
                ) : isLogin ? (
                    <p className="mx-4 mt-3">Cart is empty</p>
                ) : (
                    <div className="mx-4 mt-3">
                        <div>
                            You should
                            <Link to="/login">
                                <span className="text-blue-500 mx-1 underline">
                                    login
                                </span>
                            </Link>
                            first
                        </div>
                        <img
                            src={loginAdvice}
                            alt="login"
                            className="mt-14"
                            draggable="false"
                        />
                    </div>
                )}
            </motion.div>
        </div>
    )
}
