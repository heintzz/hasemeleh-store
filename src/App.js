// eslint-disable-next-line
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ViewProduct from './components/ViewProduct'
import About from './components/About'
import Login from './components/Login'
import { db } from './config/firebase-config.js'
import {
    doc,
    addDoc,
    collection,
    getDocs,
    setDoc,
    deleteDoc,
    query,
    orderBy,
} from 'firebase/firestore'
import Signup from './components/Signup'

export default function App() {
    // eslint-disable-next-line
    const [items, setItems] = useState([])
    const [carts, setCarts] = useState([])
    const [loading, setLoading] = useState(true)

    const productsRef = query(collection(db, 'products'), orderBy('title'))
    const cartsRef = collection(db, 'carts')

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsRef)
            setLoading(false)
            setItems(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
        }

        const getCarts = async () => {
            const data = await getDocs(cartsRef)
            setCarts(
                data.docs.map((doc) => ({
                    ...doc.data(),
                }))
            )
        }

        getProducts()
        getCarts()
    }, [])

    const addToCart = async (itemID) => {
        const findItem = carts.find((cart) => cart.id === itemID)
        if (findItem) {
            increaseHandler(itemID)
        } else {
            const item = items.find((item) => item.id === itemID)

            try {
                await addDoc(cartsRef, item)
                setCarts([...carts, item])
            } catch (e) {
                console.error('Error adding document: ', e)
            }
        }
    }

    const increaseHandler = async (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)
        const cartIndex = carts.indexOf(cart)

        const updatedCart = { ...cart, amount: cart.amount + 1 }
        const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        updatedCarts.splice(cartIndex, 0, updatedCart)

        setCarts([...updatedCarts])

        const data = await getDocs(cartsRef)
        const docID = data.docs.find((item) => item.data().id === cartID).id
        const updatedRef = doc(db, 'carts', docID)

        await setDoc(updatedRef, {
            ...cart,
            amount: cart.amount + 1,
        })
    }

    const decreaseHandler = async (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)
        const cartindex = carts.indexOf(cart)

        const updatedCart = { ...cart, amount: cart.amount - 1 }
        const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        updatedCarts.splice(cartindex, 0, updatedCart)

        const data = await getDocs(cartsRef)
        const docID = data.docs.find((item) => item.data().id === cartID).id
        const updatedRef = doc(db, 'carts', docID)

        if (cart.amount - 1) {
            await setDoc(updatedRef, {
                ...cart,
                amount: cart.amount - 1,
            })
            setCarts([...updatedCarts])
        } else {
            await deleteDoc(doc(db, 'carts', docID))
            setCarts([...carts.filter((cart) => cart.id !== cartID)])
        }
    }

    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto flex font-mono pl-5">
                <Nav carts={carts} />
                <Routes>
                    <Route
                        path="/home"
                        element={
                            <>
                                <ViewProduct
                                    addToCart={addToCart}
                                    items={items}
                                    loading={loading}
                                />
                                <Cart
                                    carts={carts}
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/about/:id"
                        element={<About items={items} />}
                    />
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    )
}
