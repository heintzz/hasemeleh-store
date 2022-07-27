import React from 'react'
import Price from './Price'
import Series from './Series'
import Title from './Title'

const Description = () => {
    return (
        <div className="mx-2 animate-pulse">
            <Title />
            <Series />
            <Price />
        </div>
    )
}

export default Description
