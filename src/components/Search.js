import React from 'react'

export default function Search({ searchKey, changeHandler, enterHandler }) {
    return (
        <div className="flex flex-col max-w-xs mr-5 z-0 sm:mx-auto">
            <label htmlFor="search-bar">Search Item</label>
            <input
                type="text"
                name="search-bar"
                spellCheck="false"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                className="h-6 border rounded-md px-2 mt-2 text-xs truncate"
                value={searchKey}
                onChange={changeHandler}
                onKeyPress={enterHandler}
            />
        </div>
    )
}
