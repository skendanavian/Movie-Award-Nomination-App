import "./SearchBar.scss";

function SearchBar({ handleSearchBar }) {
  return (
    <input
      className="search-bar"
      placeholder="Enter Movie Title"
      onChange={(event) => handleSearchBar(event)}
    />
  );
}

export default SearchBar;
