import React from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import DiplayBooks from './DiplayBooks'

const Home = ( user ) => {
  console.log(user)
  return (
    <div>
        <Navigation user={ user } />
       
        <DiplayBooks/>
    </div>

  )
}

export default Home