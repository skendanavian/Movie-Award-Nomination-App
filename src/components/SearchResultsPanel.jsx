import SearchListItem from "./SearchListItem";
import "./SearchResultsPanel.scss";

function SearchResultsPanel({ input, searchResults }) {
  let searchResultsList;
  if (searchResults) {
    searchResultsList = searchResults.map((movie, index) => {
      return <SearchListItem key={index} movieData={movie} />;
    });
  }

  return (
    <div>
      <h3>Results for "{input}" </h3>
      <div>
        {searchResults ? <ul>{searchResultsList}</ul> : <p>No Results Found</p>}
      </div>
    </div>
  );
}

export default SearchResultsPanel;
