import { useReducer } from 'react'

import SearchContext from './search-context'

const defaultState = {
  items: [],
  favoriteItems: []
}

const searchReducer = (state, action) => {
  if (action.type === 'UPDATE_ITEMS') {
    return {
      ...state,
      items: action.newItems
    }
  }

  if (action.type === 'UPDATE_FAVORITE_ITEM') {
    let favorites = state.favoriteItems
    const alreadyFavorite = favorites.find((item) => item.id === action.item.id)

    if(alreadyFavorite) {
      favorites = favorites.filter((item) => item.id !== action.item.id)
    } else {
      favorites = [...favorites, action.item]
    }

    return {
      ...state,
      favoriteItems: favorites
    }
  }
  if (action.type === 'WRITE_FAVORITES') {
    return {
      ...state,
      favoriteItems: action.favItems
    }
  }
}

const SearchProvider = (props) => {
  const [state, dispatchAction] = useReducer(
    searchReducer,
    defaultState
  )

  const updateItemsHandler= (newItems) => {
    dispatchAction({
      type: 'UPDATE_ITEMS',
      newItems: newItems
    })
  }

  const updateFavoritesHandler = (item) => {
    dispatchAction({
      type: 'UPDATE_FAVORITE_ITEM',
      item
    })
  }

  const writeFavoritesHandler = (favItems) => {
    dispatchAction({
      type: 'WRITE_FAVORITES',
      favItems: favItems
    })
  }

  const searchContext = {
    items: state.items,
    favoriteItems: state.favoriteItems,
    totalFavorites: state.favoriteItems.length,
    updateItems: updateItemsHandler,
    updateFavorites: updateFavoritesHandler,
    writeFavorites: writeFavoritesHandler
  }

  return (
    <SearchContext.Provider value={searchContext}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
