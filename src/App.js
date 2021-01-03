import { useState, useEffect } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";
import movieCamera from "./components/images/movieCamera.png";
import CircleLoader from "react-spinners/CircleLoader";
import axios from "axios";
import "./App.scss";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [nomineeNumber, setNomineeNumber] = useState(0);
  const [submissionView, setSubmissionView] = useState(false);

  // API call to Movie DB on input change

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?s=${input.toLowerCase()}&type=movie&page=1&apikey=${API_KEY}`
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

  // When nominee list is 5 -> sets submit page to submissionView

  useEffect(() => {
    if (nominees && nominees.length === 5) {
      setTimeout(() => {
        setSubmissionView(true);
      }, 1000);
    }
    setNomineeNumber(nominees.length);
  }, [nominees]);

  // Show Submit page for 4.5 seconds and then back to home page

  if (submissionView) {
    setTimeout(() => {
      setSubmissionView(false);
    }, 5000);
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
      {submissionView && (
        <div className={submissionView && " page-container show-page"}>
          <h1>Submitting Nominations!</h1>
          <CircleLoader color={"#b1b1ae"} loading={submissionView} size={170} />

          <h3 className="fade-in">
            Thanks for submitting to the 2021 Shoppie Awards!
          </h3>
        </div>
      )}
      {!submissionView && (
        <div className={!submissionView && "page-container"}>
          <div className="header">
            <div className="site-logo-container">
              <img
                className="camera-icon"
                src={movieCamera}
                alt="movie-camera-icon"
              />
              <h1>The Shoppies</h1>
            </div>
            <h2>2021 Nomination Form</h2>
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
