export default function SearchBar() {
    return (
        <>
            <label htmlFor="search-bar" className="font-semibold">Search Item</label>
            <input
                type="text"
                name="search-bar"
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ...."
                className="w-full h-6 border rounded-xl px-2 block text-xs truncate"
            />
            
        </>
    )
}
