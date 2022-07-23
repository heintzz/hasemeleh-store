export default function Cart({ carts, increaseHandler, decreaseHandler }) {
    const finalPrice = carts.reduce((acc, cur) => {
        acc += cur.price * cur.amount
        return acc
    }, 0)

    return (
        <div className="hidden md:display-block md:w-4/12 md:flex md:flex-col mt-5 pr-5">
            <h2 className="font-semibold">Cart</h2>
            {carts.length === 0 && <p className="mt-2">No Item</p>}
            <div className="my-5">
                {carts.map((cart) => {
                    const { title, type, price, img, id, amount } = cart
                    const itemsPrice = (price * amount).toFixed(2)
                    return (
                        <div
                            className="flex bg-blue-200 items-center py-2 gap-x-5 mb-5 last:mb-0 h-24"
                            key={id}
                        >
                            <img className="w-3/12 ml-3 object-contain" src={img} />
                            <div className="block text-sm">
                                <h4>{title}</h4>

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
                    )
                })}
            </div>
            {carts.length > 0 && (
                <button className="flex p-2 gap-x-3 bg-blue-100 w-fit">
                    <img src="./icons/bag-handle.svg" />
                    <p>{`$ ${finalPrice.toFixed(2)}`}</p>
                </button>
            )}
        </div>
    )
}
