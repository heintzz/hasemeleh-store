import { useState } from 'react'
import products from './components/Products'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ViewProduct from './components/ViewProduct'

export default function App() {
    const [items, setItems] = useState(products)
    const [carts, setCarts] = useState([])

    const addToCart = (itemID) => {
        if (carts.find((cart) => cart.id === itemID)) {
            console.log('data sudah ada')
        } else {
            const item = items.find((item) => item.id === itemID)
            const newItem = { ...item, onCart: true }

            setCarts([...carts, newItem])
        }
    }

    return (
        <div className="bg-slate-100">
            <div className="container mx-auto flex font-mono">
                <Nav />
                <ViewProduct addToCart={addToCart} items={items} />
                <Cart carts={carts} />
            </div>
        </div>
    )
}
