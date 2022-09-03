import React, { useContext, useState } from 'react'
import Product from './Product'
import Search from './Search'
import ContentSkeleton from '../skeletons/Products/ContentSkeleton'
import AppContext from '../context/AppContext'
import { useSearchParams } from 'react-router-dom'

export default function Content() {
  const { isLoading } = useContext(AppContext)
  const [searchKey, setSearchKey] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('search') ? searchParams.get('search') : ''
  const changeHandler = (e) => {
    setSearchKey(e.target.value)
  }

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      setSearchKey('')
      setSearchParams({ search: searchKey })
    }
  }

  return (
    <div className="w-10/12 mt-5 ml-10 md:w-8/12">
      <Search
        changeHandler={changeHandler}
        searchKey={searchKey}
        enterHandler={enterHandler}
      />
      {isLoading ? <ContentSkeleton /> : <Product keyword={query} />}
    </div>
  )
}
