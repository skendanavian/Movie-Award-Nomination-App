import { useState, useEffect } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./App.scss";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);

  //Maybe Store Nominees as object for ease of checking searchList
  const [nominees, setNominees] = useState([]);

  //Move the axios call into the API Helper Eventually
  //Move state and helpers into custom hook --> useApplicationData
  //Could be nice to add loading state/circle while doing axios calls
  //Could use imdbID as keys
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${input.toLowerCase()}&type=movie&page=1&apikey=${API_KEY}`
      )
      .then((response) => {
        //limit results to 3 movies

        const reducedList = response.data.Search.slice(0, 3);
        console.log(reducedList);
        setSearchList(reducedList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);

  const handleSearchBar = (value) => {
    setInput(value.trim());
  };

  const addNominee = (movieData) => {
    if (nominees === undefined) {
      setNominees([{ title: movieData.Title, year: movieData.Year }]);
    } else
      setNominees([
        ...nominees,
        { title: movieData.Title, year: movieData.Year },
      ]);
  };

  const removeNominee = (movieData) => {
    const updatedNominees = nominees.filter(
      (movie) => movie.title !== movieData.title
    );

    setNominees(updatedNominees);
  };

  return (
    <div className="page-container">
      <div className="header">
        <div className="icon">
          <FontAwesomeIcon icon={faFilm} />
        </div>

        <h1>The Shoppies</h1>
        <div className="icon">
          <FontAwesomeIcon icon={faFilm} />
        </div>
      </div>

      <SearchPanel handleSearchBar={handleSearchBar} />
      <div className="flex-row">
        <SearchResultsPanel
          input={input}
          nominees={nominees}
          searchResults={searchList}
          addNominee={addNominee}
        />
        <NominationPanel nominees={nominees} removeNominee={removeNominee} />
      </div>
    </div>
  );
}

export default App;
