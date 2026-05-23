import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add-book" element={<AddBook />} />
    </Routes>
  )
}

export default App
