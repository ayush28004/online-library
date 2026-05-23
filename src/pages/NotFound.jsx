import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-4xl font-bold text-white mb-4">Page Not Found</p>
        <p className="text-xl text-indigo-100 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-indigo-200 mb-12 break-all max-w-lg mx-auto">
          Invalid route: <code className="bg-white bg-opacity-20 px-3 py-1 rounded">{location.pathname}</code>
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition shadow-lg"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
