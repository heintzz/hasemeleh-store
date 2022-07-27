import ProductItems from './ProductItems'
import SearchBar from './SearchBar'
import { useState } from 'react'

export default function ViewProduct({ addToCart, items, loading, isLogin }) {
    const [searchKey, setSearchKey] = useState('')
    const [keyword, setKeyword] = useState('')

    const onChangeHandler = (e) => {
        setSearchKey(e.target.value)
    }

    const enterHandler = (e) => {
        if (e.key === 'Enter') {
            setKeyword(searchKey)
            setSearchKey('')
        }
    }

    return (
        <div className="w-10/12 md:w-7/12 my-5 ml-2 sm:ml-0">
            <SearchBar
                onChangeHandler={onChangeHandler}
                searchKey={searchKey}
                enterHandler={enterHandler}
            />
            {loading ? (
                <h1 className="mt-5 ml-5">loading kak...</h1>
            ) : (
                <ProductItems
                    addToCart={addToCart}
                    isLogin={isLogin}
                    items={items}
                    keyword={keyword}
                />
            )}
        </div>
    )
}
