import { useContext } from 'react'

import classes from './Header.module.css'
import SearchContext from '../../store/search-context'

const Header = () => {
  const { totalFavorites } = useContext(SearchContext)
  return (
    <>
      <header className={classes.header}>
        <h1>BW Challenge Search</h1>
        <p>Number of Favorites: {totalFavorites}</p>
      </header>
    </>
  )
}

export default Header
