import SearchBar from "./SearchBar";
import Button from "./Button";
import "./SearchPanel.scss";

function SearchPanel({ handleSubmit, handleSearchBar, nomineeNumber }) {
  return (
    <div className="search-panel">
      <div className="site-logo-container ">
        <h2 className="desktop-heading">Find a Movie</h2>
      </div>

      <SearchBar handleSearchBar={handleSearchBar} />
      <div className="submit-btn">
        <Button selected={nomineeNumber < 5} onClick={handleSubmit}>
          {nomineeNumber === 5 && "Submit Nominations"}
          {nomineeNumber === 0 && <h3>Please Nominate 5 Movies</h3>}
          {nomineeNumber > 0 && nomineeNumber < 5 && (
            <h3>({nomineeNumber} of 5 Nominations)</h3>
          )}
        </Button>
      </div>
    </div>
  );
}

export default SearchPanel;
