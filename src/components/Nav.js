export default function Nav() {
    return (
        <div className="w-1/12">
            <div className="fixed flex flex-col items-center inset-y-5 gap-y-8 p-2 w-10 rounded-lg bg-blue-100 ">
                <img className="w-8 " src="../icons/menu.svg" />
                <img className="w-8 " src="../icons/store-front.svg" />
                <img className="w-8 " src="../icons/bag-handle.svg" />
                <img className="mt-auto w-8 " src="../icons/logout.svg" />
            </div>
        </div>
    )
}
