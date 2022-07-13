export default function App() {
    return (
        <>
            <div className="container mx-auto flex">
                <div className="w-1/12">
                    <div className="fixed flex flex-col items-center inset-y-5 bg-blue-100 w-10 rounded-lg gap-y-8 p-2">
                        <img className="w-8 " src="../icons/menu.svg" />
                        <img className="w-8 " src="../icons/store-front.svg" />
                        <img className="w-8 " src="../icons/bag-handle.svg" />
                        <img
                            className="mt-auto w-8 "
                            src="../icons/logout.svg"
                        />
                    </div>
                </div>
                <div className="font-mono w-9/12 my-5 px-5 border-r-2">
                    <label htmlFor="search-bar">Search Item</label>
                    <input
                        type="text"
                        name="search-bar"
                        placeholder="Apple Watch, Samsung S21, Macbook Pro, ...."
                        className="w-full h-6 border rounded-xl px-2 block text-xs"
                    />
                </div>
                <div className="w-4/12 m-5">
                    <h1>hai</h1>
                </div>
            </div>
        </>
    )
}
