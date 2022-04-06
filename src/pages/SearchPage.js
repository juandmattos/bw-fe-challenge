import { useContext, useEffect } from 'react'

import Search from '../components/Search/Search'
import SearchResults from '../components/Search/SearchResults'

import SearchContext from '../store/search-context'
import { getFavorites } from '../api/apiSearch'

const SearchPage = () => {
  const { writeFavorites } = useContext(SearchContext)

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await getFavorites()
        writeFavorites(response.data)
      } catch (err) {
        writeFavorites([])
      }
    }
    getResults()
	}, [])

  return (
    <>
      <Search />
      <SearchResults />
    </>
  )
}

export default SearchPage
