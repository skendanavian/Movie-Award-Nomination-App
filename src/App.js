import { useState, useEffect } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";
import getMovieList from "../src/api/omdb/index";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const testNominees = ["M1", "M2", "M3", "M4", "M5"];

function App() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [nominations, setNominations] = useState([]);

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

  const addNomination = (data) => {};

  return (
    <div>
      <SearchPanel handleSearchBar={handleSearchBar} />
      <SearchResultsPanel input={input} searchResults={searchList.Search} />
      <NominationPanel nominees={testNominees} nominees={testNominees} />
    </div>
  );
}

export default App;
