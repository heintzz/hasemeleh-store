import { Link } from 'react-router-dom'
import SkeletonCarts from '../skeletons/Carts/SkeletonCarts'
import bag from '../icons/bag-handle.svg'

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

    return (
        <div className="hidden md:display-block md:w-4/12 md:flex md:flex-col mt-5 ml-5">
            <h2>Cart</h2>
            {(carts ? carts.length : carts) && isLogin ? (
                <div className="my-5">
                    {carts.map((cart) => {
                        const { title, price, img, id, amount } = cart
                        const itemsPrice = (price * amount).toFixed(2)
                        return (
                            <div
                                className="flex bg-blue-100 items-center py-2 gap-x-5 mb-5 last:mb-0 h-24 rounded-lg"
                                key={id}
                            >
                                <img
                                    src={img}
                                    alt={`${title}`}
                                    className="w-3/12 max-w-[80px] ml-3"
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
                <div className="mt-2">
                    {loading ? (
                        <SkeletonCarts />
                    ) : isLogin ? (
                        'Cart is empty'
                    ) : (
                        <div>
                            You should
                            <Link to="/login">
                                <span className="text-blue-500 mx-1 underline">
                                    login
                                </span>
                            </Link>
                            first
                        </div>
                    )}
                </div>
            )}

            {finalPrice && isLogin && (
                <button className="flex p-2 gap-x-3 bg-blue-100 w-fit rounded-lg">
                    <img src={bag} alt="bag handle icon" />
                    <p>{`$ ${finalPrice.toFixed(2)}`}</p>
                </button>
            )}
        </div>
    )
}
