import ProductItems from './ProductItems'
import SearchBar from './SearchBar'
import { useState } from 'react'

export default function ViewProduct({ addToCart, items}) {
    const [searchKey, setSearchKey] = useState('')
    const [keyword, setKeyword] = useState('')

    const onChangeHandler = (e) => {
        setSearchKey(e.target.value)
    }
    
    const enterHandler = (e) => {
        if(e.key === 'Enter') {
            setKeyword(searchKey)
            setSearchKey('')
        }
        
    }

    return (
        <>
            {/* border-r-2 border-slate-300 */}
            <div className="w-10/12 md:w-7/12 my-5 px-5 ">
                <SearchBar
                    onChangeHandler={onChangeHandler}
                    searchKey={searchKey}
                    enterHandler={enterHandler}
                />
                <ProductItems
                    addToCart={addToCart}
                    items={items}
                    keyword={keyword}
                />
            </div>
        </>
    )
}
