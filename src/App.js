import { useState } from "react";
import SearchBar from "../src/components/SearchBar";

function App() {
  const [input, setInput] = useState("");

  const handleSearchBar = (value) => {
    setInput(value);
  };

  return <SearchBar handleSearchBar={handleSearchBar} />;
}

export default App;
