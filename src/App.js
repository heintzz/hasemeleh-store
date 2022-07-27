// eslint-disable-next-line
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ViewProduct from './components/ViewProduct'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import { db } from './config/firebase-config.js'
import {
    doc,
    collection,
    getDocs,
    query,
    orderBy,
    updateDoc,
} from 'firebase/firestore'
import './App.css'

export default function App() {
    // eslint-disable-next-line
    const [items, setItems] = useState([])
    const [carts, setCarts] = useState([])
    const [loading, setLoading] = useState(true)
    const [isLogin, setIsLogin] = useState()
    const userID = window.localStorage.getItem('id')

    const productsRef = query(collection(db, 'products'), orderBy('title'))
    const usersRef = collection(db, 'users')

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

        getProducts()
        if (
            parseInt(window.localStorage.getItem('time')) + 3600000 <
            Date.parse(new Date())
        ) {
            window.localStorage.setItem('isLogin', false)
            window.localStorage.removeItem('id')
            window.localStorage.removeItem('time')
        }
        setIsLogin(JSON.parse(window.localStorage.getItem('isLogin')))
        window.localStorage.setItem('time', Date.parse(new Date()))
    }, [])

    console.log(Date.parse(new Date()))

    useEffect(() => {
        const getCarts = async () => {
            const data = await getDocs(usersRef)
            const user = data.docs.find(
                (doc) => doc.data().userID === userID
            ).id
            const carts = data.docs.find((doc) => doc.id === user)
            setCarts(carts.data().carts)
        }

        getCarts()
    }, [userID])

    const addToCart = async (itemID) => {
        if (isLogin) {
            const findItem = carts
                ? carts.find((cart) => cart.id === itemID)
                : false
            if (findItem) {
                increaseHandler(itemID)
            } else {
                const item = items.find((item) => item.id === itemID)
                const data = await getDocs(usersRef)
                const user = data.docs.find(
                    (doc) => doc.data().userID === userID
                )

                const updatedRef = doc(db, 'users', user.id)

                setCarts(carts ? [...carts, item] : [item])

                await updateDoc(updatedRef, {
                    carts: carts ? [...carts, item] : [item],
                })
            }
        } else {
            console.log('login dulu')
        }
    }

    const increaseHandler = async (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)
        const cartIndex = carts.indexOf(cart)

        const updatedCart = { ...cart, amount: cart.amount + 1 }
        const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        updatedCarts.splice(cartIndex, 0, updatedCart)

        // get reference
        const data = await getDocs(usersRef)
        const user = data.docs.find((doc) => doc.data().userID === userID)
        const updatedRef = doc(db, 'users', user.id)

        // update state and doc
        setCarts(updatedCarts)
        await updateDoc(updatedRef, {
            carts: updatedCarts,
        })
    }

    const decreaseHandler = async (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)
        const cartIndex = carts.indexOf(cart)

        const updatedCart = { ...cart, amount: cart.amount - 1 }
        const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        updatedCarts.splice(cartIndex, 0, updatedCart)

        const data = await getDocs(usersRef)
        const user = data.docs.find((doc) => doc.data().userID === userID)
        const updatedRef = doc(db, 'users', user.id)

        // removing cart from the list when its amount is zero
        if (cart.amount - 1) {
            await updateDoc(updatedRef, {
                carts: updatedCarts,
            })

            setCarts(updatedCarts)
        } else {
            updatedCarts.splice(cartIndex, 1)
            await updateDoc(updatedRef, {
                carts: updatedCarts,
            })

            setCarts(updatedCarts)
        }
    }

    return (
        <div className="bg-slate-100 min-h-screen box-border">
            <div className="max-w-7xl mx-auto flex font-mono px-5">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Nav
                                    carts={carts}
                                    isLogin={isLogin}
                                    setIsLogin={setIsLogin}
                                />
                                <ViewProduct
                                    addToCart={addToCart}
                                    items={items}
                                    loading={loading}
                                    isLogin={isLogin}
                                />
                                <Cart
                                    carts={carts}
                                    isLogin={isLogin}
                                    loading={loading}
                                    increaseHandler={increaseHandler}
                                    decreaseHandler={decreaseHandler}
                                />
                            </>
                        }
                    />
                    <Route
                        path="/about/:itemId"
                        element={
                            <>
                                <Nav
                                    carts={carts}
                                    isLogin={isLogin}
                                    setIsLogin={setIsLogin}
                                />
                                <About items={items} userID={userID} />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Login isLogin={isLogin} setIsLogin={setIsLogin} />
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    )
}
