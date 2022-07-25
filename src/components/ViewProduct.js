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
        <div className="w-10/12 md:w-7/12 my-5 px-5 ">
            <SearchBar
                onChangeHandler={onChangeHandler}
                searchKey={searchKey}
                enterHandler={enterHandler}
            />
            {loading ? (
                <h1 className="mt-5 pl-6">loading kak...</h1>
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
