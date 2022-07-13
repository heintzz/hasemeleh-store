export default function Cart({ carts }) {
    return (
        <div className="w-4/12 flex flex-col items-center mt-5 px-5">
            <h2 className="font-semibold">Cart</h2>
            <div className="flex flex-wrap">
                {carts.map((cart) => {
                    return <img className='w-4/12' src={cart.img} key={cart.id} />
                })}
            </div>
            {carts.length === 0 && <p>No Item</p>}
            {carts.length > 0 && (
                <button className="flex rounded-lg p-2 gap-x-3 bg-black text-white w-fit">
                    <img src="./icons/bag-handle.svg" />
                    <p>View Cart</p>
                </button>
            )}
        </div>
    )
}
