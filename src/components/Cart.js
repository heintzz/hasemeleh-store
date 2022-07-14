export default function Cart({ carts }) {
    return (
        <div className="w-4/12 flex flex-col mt-5 px-5">
            <h2 className="font-semibold">Cart</h2>
            {carts.length === 0 && <p>No Item</p>}
            <div className="my-5">
                {carts.map((cart) => {
                    const { title, type, price, img, id, count} = cart
                    return (
                        <div className="flex bg-blue-200 items-center mb-5 py-2 gap-x-3">
                            <img className="w-3/12" src={img} key={id} />
                            <div className="block text-sm">
                                <h4>
                                    {title} -{' '}
                                    <span className="text-xs inline">{type}</span>
                                </h4>

                                <p>{`$ ${price}`}</p>
                                <div className="my-1">
                                    <button className="px-3 bg-black text-white rounded-lg mr-2">
                                        -
                                    </button>
                                    <span>{count}</span>
                                    <button className="px-3 bg-black text-white rounded-lg ml-2">
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
                    <p>View Cart</p>
                </button>
            )}
        </div>
    )
}
