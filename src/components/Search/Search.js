import { useState, useEffect, useContext, useRef } from 'react'
import SearchContext from '../../store/search-context'
import { searchResults } from '../../api/apiSearch'
import classes from './Search.module.css'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const isMounted = useRef(false)
  const { updateItems } = useContext(SearchContext)

  useEffect(() => {
    if (isMounted.current) {
      const getResults = async (textValue) => {
        try {
          const response = await searchResults(textValue)
          if (searchText === '') {
            updateItems([])
          } else {
            updateItems(response.data)
          }
        } catch (err) {
          updateItems([])
        }
      }
      getResults(searchText)
    } else {
      isMounted.current = true;
    }
	}, [searchText])

  return (
    <section className={classes.container}>
      <h3>Search the API</h3>
      <div className={classes.inputContainer}>
        <label htmlFor='search'>Search</label>
        <input
          className={classes.input}
          type='text'
          placeholder='Search the API'
          value={searchText}
          onInput={e => setSearchText(e.target.value)}
        />
      </div>
    </section>
  )
}

export default Search
