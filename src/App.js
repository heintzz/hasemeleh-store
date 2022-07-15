import { useState } from 'react'
import products from './components/Products'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ViewProduct from './components/ViewProduct'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'

export default function App() {
    // eslint-disable-next-line
    const [items, setItems] = useState(products)
    const [carts, setCarts] = useState([])

    const addToCart = (itemID) => {
        if (carts.find((cart) => cart.id === itemID)) {
            console.log('data sudah ada')
        } else {
            const item = items.find((item) => item.id === itemID)

            setCarts([...carts, item])
        }
    }

    const increaseHandler = (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)
        const cartindex = carts.indexOf(cart)

        const updatedCart = { ...cart, amount: cart.amount + 1 }
        const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        updatedCarts.splice(cartindex, 0, updatedCart)

        setCarts([...updatedCarts])
    }

    const decreaseHandler = (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)
        const cartindex = carts.indexOf(cart)

        const updatedCart = { ...cart, amount: cart.amount - 1 }
        const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        updatedCarts.splice(cartindex, 0, updatedCart)

        if (updatedCart.amount <= 0) {
            setCarts([...carts.filter((cart) => cart.id !== cartID)])
        } else {
            setCarts([...updatedCarts])
        }
    }
    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="container mx-auto flex font-mono">
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ViewProduct
                                    addToCart={addToCart}
                                    items={items}
                                    
                                />
                                <Cart
                                    carts={carts}
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                />
                            </>
                        }
                    />
                    <Route path='/about/:id' element={<About items={items} />}/>
                </Routes>
            </div>
        </div>
    )
}
