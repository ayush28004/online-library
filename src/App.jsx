import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
    </Routes>
  )
}

export default App
