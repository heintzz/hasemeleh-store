import ProductItems from './ProductItems'
import SearchBar from './SearchBar'

export default function ViewProduct({ addToCart, items}) {
    return (
        <>
            <div className="w-9/12 my-5 px-5 border-r-2 border-slate-300 overflow-y-auto h-screen">
                <SearchBar />
                <ProductItems addToCart={addToCart} items={items} />
            </div>
        </>
    )
}
