import React from 'react'

const CartItems = ({ title, img, id, amount, itemsPrice, decreaseHandler, increaseHandler }) => {
    return (
        <div
            className="flex bg-blue-100 items-center py-2 gap-x-5 mb-5 last:mb-0 h-24 rounded-lg"
            key={id}
        >
            <img className="w-3/12 max-w-[80px] ml-3" src={img} />
            <div className="block text-sm w-8/12 mr-4">
                <h4>{title}</h4>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <p>{`$ ${itemsPrice}`}</p>
                    <div className="my-1">
                        <button
                            className="px-3 bg-black text-white rounded-lg mr-2"
                            onClick={() => decreaseHandler(id)}
                        >
                            -
                        </button>
                        <span>{amount}</span>
                        <button
                            className="px-3 bg-black text-white rounded-lg ml-2"
                            onClick={() => increaseHandler(id)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
