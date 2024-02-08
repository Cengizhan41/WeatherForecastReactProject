import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SearchResults from '../Pages/SearchResults'
import ErrorComp from './ErrorComp'

function SiteRoutes() {
  return (
    <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/search' element={ <SearchResults/>}/>
        <Route path='*' element={ <ErrorComp/> }/>
    </Routes>
  )
}

export default SiteRoutes