import { useState } from "react";
import SearchPanel from "../src/components/SearchPanel";
import NominationPanel from "../src/components/NominationPanel";

function App() {
  const [input, setInput] = useState("");

  const handleSearchBar = (value) => {
    setInput(value);
  };

  return (
    <div>
      <SearchPanel handleSearchBar={handleSearchBar} />
      <NominationPanel input={input} />
    </div>
  );
}

export default App;
