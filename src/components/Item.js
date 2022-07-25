import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ item, addToCart, isLogin }) {
    const { img, title, price, series, id } = item
    return (
        <div className="flex flex-col sm:w-6/12 lg:w-4/12 p-6 text-sm hover:scale-110 transition duration-700">
            <Link to={`/about/${id}`}>
                <img
                    className="bg-slate-300 rounded-lg mb-3 w-full"
                    src={img}
                    alt={title}
                />
            </Link>
            <div className="mb-2 px-2">
                <h3>{title}</h3>
                <h4 className="text-xs">{series}</h4>
            </div>
            <div className="flex justify-between items-center px-2">
                <p>{`$ ${price}`}</p>
                <Link to={isLogin ? '/' : '/login'} onClick={() => addToCart(id)}>
                    <img src="./icons/bag-add.svg" />
                </Link>
            </div>
        </div>
    )
}
