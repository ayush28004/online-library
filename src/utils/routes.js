export const routes = [
  {
    path: '/',
    name: 'Home',
    label: 'Home'
  },
  {
    path: '/books/:category',
    name: 'BrowseBooks',
    label: 'Browse Books'
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    label: 'Book Details'
  },
  {
    path: '/add-book',
    name: 'AddBook',
    label: 'Add Book'
  },
  {
    path: '*',
    name: 'NotFound',
    label: '404'
  }
]
