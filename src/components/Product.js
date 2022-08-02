import React, { useContext } from 'react'
import Item from './Item'
import AppContext from '../context/AppContext'
import notFound from '../icons/not-found.svg'
import { motion } from 'framer-motion'

export default function Product({ keyword }) {
    const { items, isLogin, addToCart } = useContext(AppContext)
    console.log(items)
    const filteredItems = items.filter(
        (item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.types.find((type) => type.includes(keyword.toLowerCase()))
    )

    return (
        <div className="flex flex-wrap mt-10">
            {keyword ? (
                filteredItems.length ? (
                    filteredItems.map((item, time) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 1,
                                        delay: time * 0.25,
                                    },
                                }}
                            >
                                <Item
                                    item={item}
                                    addToCart={addToCart}
                                    isLogin={isLogin}
                                    key={item.id}
                                />
                            </motion.div>
                        )
                    })
                ) : (
                    <div className="sm:mx-auto">
                        <img
                            src={notFound}
                            alt="not found"
                            className="w-40 mb-10 lg:w-64"
                        />
                        <div className="mb-5">Item not found...</div>
                        <button
                            className="bg-red-300 w-fit py-1 px-2 rounded-xl"
                            onClick={() => window.location.reload()}
                        >
                            Back
                        </button>
                    </div>
                )
            ) : (
                items.map((item) => {
                    return (
                        <Item
                            item={item}
                            addToCart={addToCart}
                            isLogin={isLogin}
                            key={item.id}
                        />
                    )
                })
            )}
        </div>
    )
}
