import React, { useEffect, useReducer } from 'react'
import AppContext from './AppContext'
import reducer from './reducer'
import { db } from '../config/firebase-config.js'
import {
    doc,
    collection,
    getDocs,
    query,
    orderBy,
    updateDoc,
} from 'firebase/firestore'

const initialState = {
    items: [],
    carts: [],
    isLogin: null,
    isLoading: true,
    isModalOpen: false,
}

export default function AppState(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { items, carts, isLogin } = state

    const usersRef = collection(db, 'users')
    const userID = window.localStorage.getItem('id')
    const productsRef = query(collection(db, 'products'), orderBy('price'))

    useEffect(() => {
        const newDate = Date.parse(new Date())
        const expired = parseInt(window.localStorage.getItem('time')) + 3600000 < newDate

        if (expired) {
            window.localStorage.setItem('isLogin', false)
            window.localStorage.removeItem('id')
            window.localStorage.removeItem('time')
        }

        changeLogin(JSON.parse(window.localStorage.getItem('isLogin')))
        window.localStorage.setItem('time', newDate)

        const getData = async () => {
            const res = await getDocs(productsRef)
            const data = res.docs.map((item) => {
                return { ...item.data(), id: item.id }
            })
            dispatch({ type: 'GET_ITEMS', payload: data })
        }
        getData()
    }, [])

    useEffect(() => {
        const getCarts = async () => {
            const res = await getDocs(usersRef)
            const user = res.docs.find((doc) => doc.data().userID === userID).id
            const carts = res.docs.find((doc) => doc.id === user).data().carts
            dispatch({ type: 'GET_CARTS', payload: carts })
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
                dispatch({
                    type: 'UPDATE_CARTS',
                    payload: carts ? [...carts, item] : [item],
                })

                const data = await getDocs(usersRef)
                const user = data.docs.find(
                    (doc) => doc.data().userID === userID
                )
                const updatedRef = doc(db, 'users', user.id)
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

        dispatch({ type: 'INCREASE', payload: updatedCarts })

        // get reference
        const data = await getDocs(usersRef)
        const user = data.docs.find((doc) => doc.data().userID === userID)
        const updatedRef = doc(db, 'users', user.id)

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

            dispatch({ type: 'DECREASE', payload: updatedCarts })
        } else {
            updatedCarts.splice(cartIndex, 1)
            await updateDoc(updatedRef, {
                carts: updatedCarts,
            })

            dispatch({ type: 'REMOVE_CART', payload: updatedCarts })
        }
    }

    const showModal = (condition) => {
        dispatch({type: 'OPEN_CLOSE', payload: condition})
    }

    const changeLogin = (status) => {
        dispatch({
            type: 'CHANGE_LOGIN_STATE',
            payload: status,
        })
    }

    return (
        <AppContext.Provider value={{ ...state, addToCart, increaseHandler, decreaseHandler, showModal, changeLogin }}>
            {props.children}
        </AppContext.Provider>
    )
}
