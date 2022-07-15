import ProductItems from './ProductItems'
import SearchBar from './SearchBar'
import { useState } from 'react'

export default function ViewProduct({ addToCart, items}) {
    const [searchKey, setSearchKey] = useState('')

    const onChangeHandler = (e) => {
        setSearchKey(e.target.value.slice(0, 25))
    }

    console.log(searchKey)
    return (
        <>
            <div className="w-8/12 my-5 px-5 border-r-2 border-slate-300">
                <SearchBar onChangeHandler={onChangeHandler} searchKey={searchKey} />
                <ProductItems addToCart={addToCart} items={items} searchKey={searchKey} />
            </div>
        </>
    )
}
