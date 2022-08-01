import React from 'react'
import notFound from '../icons/page-not-found.svg'

export default function NotFound() {
  return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
          <img src={notFound} alt="page-not-found" className='w-80 lg:w-8/12'/>
      </div>
  )
}
