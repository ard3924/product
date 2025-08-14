import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
