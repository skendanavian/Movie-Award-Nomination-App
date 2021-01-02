import { useState, useEffect } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";
import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";
import "./App.scss";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [nomineeNumber, setNomineeNumber] = useState(0);
  const [visible, setVisible] = useState(false);

  // API call to Movie DB on input change

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

  // When nominee list is 5 -> sets submit page to visible

  useEffect(() => {
    if (nominees && nominees.length === 5) {
      setTimeout(() => {
        setVisible(true);
      }, 1200);
    }
    setNomineeNumber(nominees.length);
  }, [nominees]);

  // Show Submit page for 5.5 seconds and then back to home page

  if (visible) {
    setTimeout(() => {
      setVisible(false);
    }, 5500);
  }

  // Live Search Function

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
    <>
      {visible && (
        <div className={visible && " page-container show-page"}>
          <h1>Submitting Nominations!</h1>
          <CircleLoader color="white" loading={visible} size={150} />
        </div>
      )}
      {!visible && (
        <div className={!visible && "page-container"}>
          <div className="header">
            <h1>The Shoppies</h1>
          </div>
          <SearchPanel handleSearchBar={handleSearchBar} />
          <div className="flex-row1">
            <SearchResultsPanel
              input={input}
              nominees={nominees}
              searchResults={searchList}
              addNominee={addNominee}
            />
            <NominationPanel
              nomineeTotal={nomineeNumber}
              nominees={nominees}
              removeNominee={removeNominee}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
