export default function SearchBar({
    searchKey,
    onChangeHandler,
    enterHandler,
}) {
    return (
        <div className="flex flex-col max-w-xs mr-5 sm:mx-auto">
            <label htmlFor="search-bar" className="font-semibold">
                Search Item
            </label>
            <input
                type="text"
                name="search-bar"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ...."
                className="h-6 border rounded-md px-2 mt-2 text-xs truncate"
                value={searchKey}
                onChange={onChangeHandler}
                onKeyPress={enterHandler}
            />
        </div>
    )
}
