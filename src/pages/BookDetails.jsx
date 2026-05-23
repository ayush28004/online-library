import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navigation from '../components/Navigation'

function BookDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const allBooks = useSelector(state => state.books.books)
  
  const book = allBooks.find(b => b.id === id)

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <p className="text-gray-600 mb-6">The book you're looking for doesn't exist.</p>
          <Link to="/books/All" className="text-indigo-600 hover:text-indigo-800 font-semibold">
            ← Back to Browse Books
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2"
        >
          ← Back to Browse
        </button>

        {/* Book Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="mt-4 space-y-3">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="text-lg font-semibold text-indigo-600">{book.category}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-yellow-500">⭐ {book.rating}</p>
                </div>
              </div>
            </div>

            {/* Book Information */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-6">by {book.author}</p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {book.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Author</p>
                  <p className="text-lg font-semibold text-gray-900">{book.author}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="text-lg font-semibold text-gray-900">{book.category}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg hover:bg-gray-300 transition font-semibold">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">More in {book.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {allBooks
              .filter(b => b.category === book.category && b.id !== book.id)
              .slice(0, 4)
              .map(relatedBook => (
                <Link
                  key={relatedBook.id}
                  to={`/book/${relatedBook.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img src={relatedBook.cover} alt={relatedBook.title} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-gray-900 truncate">{relatedBook.title}</h3>
                    <p className="text-xs text-gray-600 truncate">{relatedBook.author}</p>
                    <p className="text-yellow-500 text-sm mt-2">⭐ {relatedBook.rating}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
