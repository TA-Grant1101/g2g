import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//import { useApiBookDetails } from './BookFunctions.jsx';

const SearchBar = ({ setSearchTerm }) => {

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleClick = () => {
  //   setSearchTerm(document.getElementById("outlined-basic"));
  // };

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
      <Button variant="contained"  style={{
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

//onClick={ handleClick }

export default SearchBar;