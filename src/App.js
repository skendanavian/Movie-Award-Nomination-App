import { useState, useEffect } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominees, setNominees] = useState([]);

  console.log({ nominees });

  //Move the axios call into the API Helper Eventually
  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${input.toLowerCase()}&type=movie&page=1&apikey=${API_KEY}`
      )
      .then((response) => {
        setSearchList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [input]);

  const handleSearchBar = (value) => {
    setInput(value.trim());
  };

  const addNominee = (movieData) => {
    setNominees([
      ...nominees,
      { title: movieData.Title, year: movieData.Year },
    ]);
  };
  const removeNominee = (movieData) => {
    const updatedNominees = nominees.filter(
      (movie) => movie.Title !== movieData.Title
    );
    setNominees(updatedNominees);
  };

  return (
    <div>
      <SearchPanel handleSearchBar={handleSearchBar} />
      <SearchResultsPanel
        input={input}
        searchResults={searchList.Search}
        addNominee={addNominee}
      />
      <NominationPanel nominees={nominees} removeNominee={removeNominee} />
    </div>
  );
}

export default App;
