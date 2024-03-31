import {React, useState } from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import BookResults from './BookResults'

const Home = () => {

  const [books, setBooks] = useState([]);

  return (
    <div>
      <div>
        <Navigation/>
        <SearchBar setBooks={setBooks} />  
      </div>
      <div>
        <div><BookResults books={books}/></div>
      </div>
    </div>
  )
}

export default Home