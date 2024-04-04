import {React, useState } from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
        <Navigation/>
        <SearchBar setSearchTerm={setSearchTerm} />  
      </div>
      <div>
      </div>
    </div>
  )
}

export default Home