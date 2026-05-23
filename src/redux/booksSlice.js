import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
      description: 'A classic American novel about wealth, love, and the American Dream.',
      rating: 4.5,
      cover: 'https://via.placeholder.com/300x400?text=The+Great+Gatsby'
    },
    {
      id: '2',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind from the Stone Age to the modern age.',
      rating: 4.7,
      cover: 'https://via.placeholder.com/300x400?text=Sapiens'
    },
    {
      id: '3',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Sci-Fi',
      description: 'An epic science fiction novel set on the desert planet Arrakis.',
      rating: 4.6,
      cover: 'https://via.placeholder.com/300x400?text=Dune'
    },
    {
      id: '4',
      title: '1984',
      author: 'George Orwell',
      category: 'Fiction',
      description: 'A dystopian social science fiction novel about totalitarianism.',
      rating: 4.4,
      cover: 'https://via.placeholder.com/300x400?text=1984'
    },
    {
      id: '5',
      title: 'Cosmos',
      author: 'Carl Sagan',
      category: 'Non-Fiction',
      description: 'A journey through space and time exploring the universe.',
      rating: 4.8,
      cover: 'https://via.placeholder.com/300x400?text=Cosmos'
    },
    {
      id: '6',
      title: 'Foundation',
      author: 'Isaac Asimov',
      category: 'Sci-Fi',
      description: 'A groundbreaking sci-fi novel about psychohistory and empire.',
      rating: 4.5,
      cover: 'https://via.placeholder.com/300x400?text=Foundation'
    }
  ]
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: String(Math.max(...state.books.map(b => parseInt(b.id)), 0) + 1),
        ...action.payload
      }
      state.books.unshift(newBook)
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload)
    }
  }
})

export const { addBook, removeBook } = booksSlice.actions
export default booksSlice.reducer
