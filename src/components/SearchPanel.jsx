import SearchBar from "./SearchBar";
import "./SearchPanel.scss";

function SearchPanel({ handleSearchBar }) {
  return (
    <div className="search-panel">
      <h2>Find a Movie</h2>
      <h2>The 2021 Shoppies</h2>

      <SearchBar handleSearchBar={handleSearchBar} />
    </div>
  );
}

export default SearchPanel;
