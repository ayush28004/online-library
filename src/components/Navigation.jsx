import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-indigo-200">
            📚 Online Library
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-indigo-200 transition">
              Home
            </Link>
            <Link to="/books/Fiction" className="hover:text-indigo-200 transition">
              Browse Books
            </Link>
            <Link to="/add-book" className="hover:text-indigo-200 transition">
              Add Book
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
