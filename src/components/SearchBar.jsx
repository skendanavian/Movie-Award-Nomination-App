import "./SearchBar.scss";

function SearchBar({ handleSearchBar }) {
  return (
    <input
      placeholder="Enter Movie Title"
      onChange={(event) => handleSearchBar(event.target.value)}
    />
  );
}

export default SearchBar;
