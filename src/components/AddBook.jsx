import { React, useState } from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import ApiBookDetails from './SearchResults'

const AddBook = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navigation/>
      <SearchBar setSearchTerm={setSearchTerm} />  
        <br/>
        <br/>
      <h2 id="search-results">Search for books to add to your library or wishlist </h2>
      <ApiBookDetails searchTerm={searchTerm} />
    </div>
  )
}

export default AddBook