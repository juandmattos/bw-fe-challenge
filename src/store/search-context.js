import React from 'react'

const SearchContext = React.createContext({
  items: [],
  favoriteItems: [],
  totalFavorites: 0,
  updateItems: (items) => {},
  updateFavorites: (item) => {},
  writeFavorites: (items) => {},
})

export default SearchContext
