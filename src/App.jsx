import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="min-h-screen bg-gray-50"><h1 className="text-3xl font-bold text-center pt-10">Online Library</h1></div>} />
    </Routes>
  )
}

export default App
