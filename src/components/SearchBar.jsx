import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import { apiBookDetails } from './BookFunctions.jsx';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = () => {
    apiBookDetails(searchTerm);
  };

  return (
    <div>
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleChange}
        style={{
            position: "absolute",
            top: 100,
            left: 100,
            right: 350,
            }}
      />
    </div>
    <div>
      <Button variant="contained" onClick={handleClick} style={{
            position: "right",
            top: 10,
            left: 1210,
            right: 250,
            }}>
        Search
      </Button>
    </div>
    </div>
  );
};

export default SearchBar;

function apiBookDetails(q) {

  const apiSearchUrl = "https://openlibrary.org/search.json?q="
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
      fetch(apiSearchUrl + q )
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
  }, []);

  if (error) {
      return <>{error.message}</>;
  } else if (!isLoaded) {
      return <>loading...</>;
  } else {
      return (
          <div className="wrapper">
              <ul className="card-grid">
                  {books.docs.map((book) => (
                      <li>
                          <article className="card" key={book.key}>
                              <div className="card-image">
                                  <img src={"https://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"} alt={book.title} />
                              </div>
                              <div className="card-content">
                                  <h2 className="card-name">{book.title}</h2>
                                  <ol className="card-list">
                                      <li>
                                          Title: <span>{book.title}</span>
                                      </li>
                                      <li>
                                          Author: <span>{book.author_name}</span>
                                      </li>
                                      <li>
                                          First Published: <span>{book.first_publish_year}</span>
                                      </li>
                                  </ol>
                              </div>
                          </article>
                      </li>
                  ))}
              </ul>
          </div>
      );
  }
}