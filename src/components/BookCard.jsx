import React from 'react'
import { Link } from 'react-router-dom'

function BookCard({ book }) {
  return (
    <div className="book-card bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1 truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-2 truncate">{book.author}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-yellow-500 font-semibold">⭐ {book.rating}</span>
          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">{book.category}</span>
        </div>
        <Link
          to={`/book/${book.id}`}
          className="block text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default BookCard
