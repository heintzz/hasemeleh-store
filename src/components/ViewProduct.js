import ProductItems from './ProductItems'
import SearchBar from './SearchBar'
import { useState } from 'react'
import SkeletonProducts from '../skeletons/Products/SkeletonProducts'

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
        <div className="w-10/12 md:w-8/12 mt-5 ml-10">
            <SearchBar
                onChangeHandler={onChangeHandler}
                searchKey={searchKey}
                enterHandler={enterHandler}
            />
            {loading ? (
                <SkeletonProducts />
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
