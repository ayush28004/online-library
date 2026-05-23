# Online Library System

A complete React + Vite online library application with book browsing, searching, and management features.

Github repo - https://github.com/ayush28004/online-library

## Features

✅ **Home Page**
- Welcome message and introduction
- Browse book categories
- Popular books showcase

✅ **Browse Books**
- Filter books by category
- Search by title or author
- Dynamic category routing

✅ **Book Details**
- Full book information display
- Related books in same category
- Rating and description

✅ **Add Book**
- Form to add new books
- Input validation
- Redux state management
- Automatic redirect after submission

✅ **404 Page**
- Custom error page
- Shows invalid route URL
- Link back to home

✅ **Styling**
- Responsive Tailwind CSS design
- Smooth transitions and hover effects
- Professional UI/UX

## Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS 3.3.6
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd d:\Projs\online-library\online-library
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`


## Routes

- `/` - Home page
- `/books/:category` - Browse books by category
- `/book/:id` - Book details page
- `/add-book` - Add new book form
- `*` - 404 Not Found page