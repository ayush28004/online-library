import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import BookCard from '../components/BookCard'

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
    },
    {
      id: '4',
      title: '1984',
      author: 'George Orwell',
      category: 'Fiction',
      rating: 4.4,
      cover: 'https://via.placeholder.com/200x300?text=1984'
    },
    {
      id: '5',
      title: 'Cosmos',
      author: 'Carl Sagan',
      category: 'Non-Fiction',
      rating: 4.8,
      cover: 'https://via.placeholder.com/200x300?text=Cosmos'
    },
    {
      id: '6',
      title: 'Foundation',
      author: 'Isaac Asimov',
      category: 'Sci-Fi',
      rating: 4.5,
      cover: 'https://via.placeholder.com/200x300?text=Foundation'
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
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
