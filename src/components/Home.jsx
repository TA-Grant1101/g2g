import {React, useState} from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import ApiBookDetails from './SearchResults'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <div>
        <Navigation/>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <ApiBookDetails searchTerm={searchTerm}/>
    </div>
  )
}

export default Home