// eslint-disable-next-line
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import Nav from './components/Nav'
import ViewProduct from './components/ViewProduct'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import { db } from './config/firebase-config'
import {
    doc,
    addDoc,
    collection,
    getDocs,
    serverTimestamp,
    updateDoc,
    setDoc,
    deleteDoc,
} from 'firebase/firestore'

export default function App() {
    // eslint-disable-next-line
    const [items, setItems] = useState([])
    const [carts, setCarts] = useState([])

    const productsRef = collection(db, 'products')
    const cartsRef = collection(db, 'carts')

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsRef)
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
            const data = await getDocs(cartsRef)
            setCarts(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    createdAt: serverTimestamp(),
                }))
            )
        }

        getCarts()
    }, [carts])

    const addToCart = async (itemID) => {
        const findItem = carts.find((cart) => cart.id === itemID)
        if (findItem) {
            // increaseHandler(itemID)
            console.log(itemID)
            console.log('item sudah ditambahkan.')
        } else {
            const item = items.find((item) => item.id === itemID)
            // setCarts([...carts, item])

            try {
                await addDoc(cartsRef, item)
            } catch (e) {
                console.error('Error adding document: ', e)
            }
        }
    }

    const increaseHandler = async (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)

        const data = await getDocs(cartsRef)
        const docID = data.docs.find((item) => item.data().id === cartID).id
        const updatedRef = doc(db, 'carts', docID)

        await setDoc(updatedRef, {
            ...cart,
            amount: cart.amount + 1,
        })

        // console.log(cart)
        // const cartIndex = carts.indexOf(cart)
        // console.log(cartIndex)

        // const updatedCart = { ...cart, amount: cart.amount + 1 }
        // const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        // updatedCarts.splice(cartIndex, 0, updatedCart)

        // setCarts([...updatedCarts])
    }

    const decreaseHandler = async (cartID) => {
        const cart = carts.find((cart) => cart.id === cartID)

        const data = await getDocs(cartsRef)
        const docID = data.docs.find((item) => item.data().id === cartID).id

        const updatedRef = doc(db, 'carts', docID)
        if (cart.amount - 1) {
            await setDoc(updatedRef, {
                ...cart,
                amount: cart.amount - 1,
            })
        } else {
            await deleteDoc(doc(db, 'carts', docID))
        }

        // const cart = carts.find((cart) => cart.id === cartID)
        // const cartindex = carts.indexOf(cart)

        // const updatedCart = { ...cart, amount: cart.amount - 1 }
        // const updatedCarts = carts.filter((cart) => cart.id !== cartID)
        // updatedCarts.splice(cartindex, 0, updatedCart)

        // if (updatedCart.amount <= 0) {
        //     setCarts([...carts.filter((cart) => cart.id !== cartID)])
        // } else {
        //     setCarts([...updatedCarts])
        // }
    }

    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto flex font-mono pl-2">
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
                    <Route
                        path="/about/:id"
                        element={<About items={items} />}
                    />
                </Routes>
            </div>
        </div>
    )
}
