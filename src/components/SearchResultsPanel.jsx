import SearchListItem from "./SearchListItem";
import "./SearchResultsPanel.scss";

function SearchResultsPanel({ input, searchResults }) {
  const searchListItems = searchResults.map((movie, index) => {
    return <SearchListItem key={index} movieData={movie} />;
  });

  return (
    <div>
      <h3>Results for "{input}" </h3>
      <div>
        <ul>{searchListItems}</ul>
      </div>
    </div>
  );
}

export default SearchResultsPanel;
