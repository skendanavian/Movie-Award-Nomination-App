import SearchListItem from "./SearchListItem";
import "./SearchResultsPanel.scss";

function SearchResultsPanel({ input, searchResults, nominees, addNominee }) {
  let searchResultsList;

  searchResultsList = searchResults.map((movie, index) => {
    return (
      <SearchListItem
        key={index}
        nominees={nominees}
        movieData={movie}
        addNominee={addNominee}
        searchResults={searchResults}
      />
    );
  });

  return (
    <div className="results-panel">
      {input ? <h3>Search Results for "{input}" </h3> : <h3>Search Results</h3>}

      <div>
        <ul>{searchResultsList}</ul>
      </div>
    </div>
  );
}

export default SearchResultsPanel;
