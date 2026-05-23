import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navigation from '../components/Navigation'
import BookCard from '../components/BookCard'

function BrowseBooks() {
  const { category } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const allBooks = useSelector(state => state.books.books)
  
  const filteredByCategory = category && category !== 'All'
    ? allBooks.filter(book => book.category === category)
    : allBooks

  const filteredBooks = searchTerm
    ? filteredByCategory.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredByCategory

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Romance', 'Biography']

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {category && category !== 'All' ? `${category} Books` : 'All Books'}
          </h1>
          <p className="text-gray-600">Found {filteredBooks.length} book(s)</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/books/All"
              className={`px-4 py-2 rounded-lg transition ${
                !category || category === 'All'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
              }`}
            >
              All
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                to={`/books/${cat}`}
                className={`px-4 py-2 rounded-lg transition ${
                  category === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No books found matching your search.</p>
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
              ← Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseBooks
