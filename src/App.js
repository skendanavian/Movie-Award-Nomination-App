import { useState, useEffect } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Popup from "react-animated-popup";
import axios from "axios";
import "./App.scss";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [nomineeNumber, setNomineeNumber] = useState(0);
  const [visible, setVisible] = useState(false);
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
        //limit results to 5 movies for panel
        const reducedList = response.data.Search.slice(0, 5);
        setSearchList(reducedList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input, nominees]);

  useEffect(() => {
    if (nominees && nominees.length === 5) setVisible(true);
    setNomineeNumber(nominees.length);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, [nominees]);

  const handleSearchBar = (input) => {
    setSearchList([]);
    setInput(input);
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
    console.log({ movieData });
    console.log({ nominees });
    const updatedNominees = nominees.filter(
      (movie) =>
        !(movie.title === movieData.title && movie.year === movieData.year)
    );
    setSearchList([]);
    setNominees(updatedNominees);
  };

  return (
    <div className="overlay">
      <Popup
        className="popup"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <h1>Thanks for your nominations!</h1>
      </Popup>
      <div
        className={!visible ? "page-container" : "page-container--dark-overlay"}
      >
        >
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
        <div className="flex-row1">
          <SearchResultsPanel
            input={input}
            nominees={nominees}
            searchResults={searchList}
            addNominee={addNominee}
          />
          <NominationPanel nominees={nominees} removeNominee={removeNominee} />
        </div>
      </div>
    </div>
  );
}

export default App;
