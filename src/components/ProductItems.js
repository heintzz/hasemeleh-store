import Item from './Item'

export default function ProductItems({ addToCart, isLogin, items, keyword }) {
    const filteredItems = items.filter(
        (item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase()) ||
            item.types.find((type) => type.includes(keyword.toLowerCase()))
    )

    return (
        <div className="flex flex-wrap mt-5">
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
                    <h2>barangnya kaga ada</h2>
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
