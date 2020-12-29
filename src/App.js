import { useState } from "react";
import SearchPanel from "../src/components/SearchPanel";
import SearchResultsPanel from "../src/components/SearchResultsPanel";
import NominationPanel from "../src/components/NominationPanel";

const testNominees = ["M1", "M2", "M3", "M4", "M5"];
const testSearchList = ["Movie 1", "Movie 2", "Movie 3"];

function App() {
  const [input, setInput] = useState("");
  const [nominations, setNominations] = useState([]);

  const handleSearchBar = (value) => {
    setInput(value);
  };

  const addNomination = (data) => {};

  return (
    <div>
      <SearchPanel handleSearchBar={handleSearchBar} />
      <SearchResultsPanel input={input} searchResults={testSearchList} />
      <NominationPanel nominees={testNominees} nominees={testNominees} />
    </div>
  );
}

export default App;
