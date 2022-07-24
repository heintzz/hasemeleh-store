import Item from './Item'

export default function ProductItems({ addToCart, items, keyword }) {
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
                                key={item.id}
                            />
                        )
                    })
                ) : (
                    <h2>barangya kaga ada</h2>
                )
            ) : (
                items.map((item) => {
                    return (
                        <Item item={item} addToCart={addToCart} key={item.id} />
                    )
                })
            )}
        </div>
    )
}
