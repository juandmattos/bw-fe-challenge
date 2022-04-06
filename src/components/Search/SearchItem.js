import { useContext } from 'react'

import { FaRegStar } from 'react-icons/fa'
import classes from './SearchItem.module.css'
import SearchContext from '../../store/search-context'
import { updateStarred } from '../../api/apiSearch'

const SearchItem = ({item}) => {
  const { updateFavorites, favoriteItems } = useContext(SearchContext)

  const toggleFavorite = async () => {
    await updateStarred(item.id, !item.starred)
    updateFavorites(item)
  }

  return (
    <div className={classes.container} onClick={toggleFavorite}>
      <div className={classes.itemContainer}>
        <>
          {
            item.image && <img aria-label='Image' src={item.image}/>
          }
        </>
        <div className={classes.infoContainer}>
          <div>
            <span className={classes.label}>Name:</span> {item.name}
          </div>
          {item.type === 'animal' && (
            <div>
              <span className={classes.label}>Scientific Name:</span> {item.taxonomy.scientificName}
            </div>
          )}
          {item.type === 'product' && (
            <>
              <div>
                <span className={classes.label}>Product Category:</span> {item.productCategory}
              </div>
              <div>
                <span className={classes.label}>Preview Text:</span> {item.previewText}
              </div>
            </>
          )}
          {item.type === 'company' && (
            <>
              <div>
                <span className={classes.label}>Description:</span> {item.description}
              </div>
              <div>
                <span className={classes.label}>Address:</span> {`${item.address.address1}, ${item.address.city}, ${item.address.state}, ${item.address.postalCode}`}
              </div>
            </>
          )}
        </div>
        <div>
          {
            favoriteItems.find((element) => element.id === item.id) ? <FaRegStar className={classes.favIcon}/> : <FaRegStar/> 
          }
        </div>
      </div>
    </div>
  )
}

export default SearchItem
