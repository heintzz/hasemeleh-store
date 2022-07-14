export default function ProductItems({ addToCart, items }) {
    return (
        <div className="flex flex-wrap mt-5">
            {items.map((item) => {
                const { img, title, price, type, id } = item
                return (
                    <div key={id} className="flex flex-col w-4/12 p-4 text-sm">
                        <img
                            className="bg-slate-300 rounded-3xl mb-3 max-w-[100%]"
                            src={img}
                            alt={title}
                        />
                        <div className="mb-2 px-2">
                            <h3>{title}</h3>
                            <h4 className="text-xs">{type}</h4>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <p>{`$ ${price} `}</p>
                            <button onClick={() => addToCart(id)}>
                                <img src="./icons/bag-add.svg" />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
