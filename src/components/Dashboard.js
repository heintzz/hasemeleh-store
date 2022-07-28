import React from 'react'
import Cart from './Cart'
import Nav from './Nav'
import ViewProduct from './ViewProduct'

const Dashboard = ({items, carts, addToCart, loading, isLogin, setIsLogin, isModalOpen, setIsModalOpen, increaseHandler, decreaseHandler}) => {
  return (
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
  )
}

export default Dashboard
