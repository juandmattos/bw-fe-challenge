import { useContext } from 'react'
import SearchContext from '../../store/search-context'
import Card from '../UI/Card'
import SearchItem from '../Search/SearchItem'
import classes from './SearchResults.module.css'

const SearchResult = () => {
  const { items } = useContext(SearchContext)

  const noItems = (
    <p className={classes.notFound}>
      No results!
    </p>
  )

  return (
    <section className={classes.container}>
      <Card>
        {items.length === 0 ? 
          noItems :
          items.map((item) => <SearchItem item={item} key={item.id} />
        )}
      </Card>
    </section>
  )
}

export default SearchResult
