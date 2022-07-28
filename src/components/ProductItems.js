import Item from './Item'
import notFound from '../icons/not-found.svg'

export default function ProductItems({ addToCart, isLogin, items, keyword }) {
    const filteredItems = items.filter(
        (item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.types.find((type) => type.includes(keyword.toLowerCase()))
    )

    return (
        <div className="flex flex-wrap mt-10">
            {keyword ? (
                filteredItems.length ? (
                    filteredItems.map((item) => {
                        return (
                            <Item
                                item={item}
                                addToCart={addToCart}
                                isLogin={isLogin}
                                key={item.id}
                            />
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
