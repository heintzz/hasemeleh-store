export default function Cart({
    carts,
    isLogin,
    loading,
    increaseHandler,
    decreaseHandler,
}) {
    const finalPrice = carts?.reduce((acc, cur) => {
        acc += cur.price * cur.amount
        return acc
    }, null)

    // const balance = 5000
    return (
        <div className="hidden md:display-block md:w-4/12 md:flex md:flex-col mt-5 ml-5">
            <h2 className="font-semibold">Cart</h2>
            {(carts ? carts.length : carts) && isLogin ? (
                <div className="my-5">
                    {carts.map((cart) => {
                        const { title, price, img, id, amount } = cart
                        const itemsPrice = (price * amount).toFixed(2)
                        return (
                            <div
                                className="flex bg-blue-200 items-center py-2 gap-x-5 mb-5 last:mb-0 h-24 rounded-lg"
                                key={id}
                            >
                                <img
                                    className="w-3/12 max-w-[80px] ml-3"
                                    src={img}
                                />
                                <div className="block text-sm w-8/12 mr-4">
                                    <h4>{title}</h4>
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                        <p>{`$ ${itemsPrice}`}</p>
                                        <div className="my-1">
                                            <button
                                                className="px-3 bg-black text-white rounded-lg mr-2"
                                                onClick={() =>
                                                    decreaseHandler(id)
                                                }
                                            >
                                                -
                                            </button>
                                            <span>{amount}</span>
                                            <button
                                                className="px-3 bg-black text-white rounded-lg ml-2"
                                                onClick={() =>
                                                    increaseHandler(id)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <p className="mt-2">{loading ? 'loading kak...' : 'No Item'}</p>
            )}

            {finalPrice && isLogin && (
                <button className="flex p-2 gap-x-3 bg-blue-100 w-fit">
                    <img src="./icons/bag-handle.svg" />
                    <p>{`$ ${finalPrice.toFixed(2)}`}</p>
                </button>
            )}

            {/* <div>
                <h1>Your Balance</h1>
                <p>{`$ ${balance}`}</p>
            </div> */}
        </div>
    )
}
