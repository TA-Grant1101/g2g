import { React, useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ApiSearch() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const handleClick = () => {
      setSearchTerm(document.getElementById("fullWidth").value);
    };

    useEffect(() => {
      if (searchTerm.length > 0 ) {
        fetch('http://openlibrary.org/search.json?q=' + '"' + searchTerm + '"')
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setBooks(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
      }

    }, [searchTerm]);

    if (error) {
      return <>{error.message}</>;
    } else if (!isLoaded) {
      return (
        <div className='searchBar'>
          <form onSubmit={handleClick}>
            <TextField
              id="fullWidth"
              label="Search"
              variant="outlined"
            />
          </form>
          <div>
            <Button variant="contained" onClick={handleClick}>
              Search
            </Button>
          </div>
        <br/>
          <h3>loading...</h3>
        </div>)
    } else {
      return (
          <div className='searchBar'>
            <form onSubmit={handleClick}>
              <TextField
                id="fullWidth"
                label="Search"
                variant="outlined"
              />
            </form>
            <div>
              <Button variant="contained" onClick={handleClick}>
                Search
              </Button>
            </div>
          <br/>
          <div className="wrapper">
              <ul className="card-grid">
                  {books.docs.map((book) => (
                    <div className="card" key={book.key}>
                        <div className="card-image">
                            <img src={"https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title} />
                        </div>
                        <div className="card-content">
                            <h3 className="card-name">{book.title}</h3>
                        </div>
                    </div>
                  ))}
              </ul>
            </div>
          </div>
      )};
}

export default ApiSearch;