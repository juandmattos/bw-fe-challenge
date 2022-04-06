import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' }
})

const searchResults = (searchText, pageNumber = 1, limit = 10) => {
  return client.get(
    `/search?q=${searchText}&_page=${pageNumber}&_limit=${limit}`
  )
}

const getFavorites = () => {
  return client.get(`/search?starred=true`)
}

const updateStarred = (id, isFavorite) => {
  return client.patch(
    `/search/${id}`,
    {
      "starred": isFavorite
    }
  )
}

export {
  searchResults,
  updateStarred,
  getFavorites
}
