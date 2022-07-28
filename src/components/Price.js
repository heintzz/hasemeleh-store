import React from 'react'

const Price = ({finalPrice}) => {
  return (
      <button className="flex p-2 gap-x-3 bg-blue-100 w-fit rounded-lg">
          <img src="./icons/bag-handle.svg" />
          <p>{`$ ${finalPrice.toFixed(2)}`}</p>
      </button>
  )
}

export default Price
