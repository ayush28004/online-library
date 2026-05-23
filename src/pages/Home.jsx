import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Romance', 'Biography']
  
  const popularBooks = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      rating: 4.5,
      cover: 'https://via.placeholder.com/200x300?text=The+Great+Gatsby'
    },
    {
      id: '2',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      rating: 4.7,
      cover: 'https://via.placeholder.com/200x300?text=Sapiens'
    },
    {
      id: '3',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      rating: 4.6,
      cover: 'https://via.placeholder.com/200x300?text=Dune'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Online Library</h1>
          <p className="text-xl text-gray-600">Discover thousands of books across multiple categories</p>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link
                key={category}
                to={`/books/${category}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center font-semibold text-indigo-600 hover:text-indigo-800"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Books Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBooks.map(book => (
              <div key={book.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
                <img src={book.cover} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-yellow-500">⭐ {book.rating}</span>
                    <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">{book.category}</span>
                  </div>
                  <Link
                    to={`/book/${book.id}`}
                    className="block text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
