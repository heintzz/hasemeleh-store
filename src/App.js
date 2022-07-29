import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import About from './components/About'
import Home from './components/Home'
import Authentication from './components/Authentication'
import {
    doc,
    collection,
    getDocs,
    query,
    orderBy,
    updateDoc,
} from 'firebase/firestore'
import { db } from './config/firebase-config.js'
import './App.css'
import Dashboard from './components/Dashboard'

export default function App() {
    const [items, setItems] = useState([])
    const [carts, setCarts] = useState([])
    const [isLogin, setIsLogin] = useState()
    const [loading, setLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const userID = window.localStorage.getItem('id')

    const usersRef = collection(db, 'users')
    const productsRef = query(collection(db, 'products'), orderBy('price'))

    useEffect(() => {
        const newDate = Date.parse(new Date())
        const expired =
            parseInt(window.localStorage.getItem('time')) + 3600000 < newDate

        if (expired) {
            window.localStorage.setItem('isLogin', false)
            window.localStorage.removeItem('id')
            window.localStorage.removeItem('time')
        }
        setIsLogin(JSON.parse(window.localStorage.getItem('isLogin')))
        window.localStorage.setItem('time', newDate)

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
    }, [])

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
        <Home isModalOpen={isModalOpen}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Dashboard
                            items={items}
                            carts={carts}
                            addToCart={addToCart}
                            loading={loading}
                            isLogin={isLogin}
                            setIsLogin={setIsLogin}
                            isModalOpen={isModalOpen}
                            setIsModalOpen={setIsModalOpen}
                            increaseHandler={increaseHandler}
                            decreaseHandler={decreaseHandler}
                        />
                    }
                />
                <Route
                    path="/about/:itemId"
                    element={
                        <>
                            <Nav
                                carts={carts}
                                loading={loading}
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                                increaseHandler={increaseHandler}
                                decreaseHandler={decreaseHandler}
                            />
                            <About items={items} userID={userID} />
                        </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        isLogin ? (
                            <Navigate to="/" />
                        ) : (
                            <Authentication
                                authType="Login"
                                isLogin={isLogin}
                                setIsLogin={setIsLogin}
                            />
                        )
                    }
                />
                <Route
                    path="/signup"
                    element={
                        isLogin ? (
                            <Navigate to="/" />
                        ) : (
                            <Authentication authType="Sign up" />
                        )
                    }
                />
            </Routes>
        </Home>
    )
}
