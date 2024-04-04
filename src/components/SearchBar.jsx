import { React } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SearchBar = ({ setSearchTerm }) => {

  const handleClick = async() => {
    setSearchTerm(document.getElementById("outlined-basic").value);
    };

  return (    
      <section>
        <div>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            style={{
                position: "absolute",
                top: 100,
                left: 100,
                right: 350,
                }}
          />
        </div>
        <div>
          <Button variant="contained" onClick={ handleClick } style={{
                position: "right",
                top: 10,
                left: 1210,
                right: 250,
                }}>
            Search
          </Button>
        </div>
    <div id="search-result"></div>  
  </section>
  );
}


export default SearchBar;