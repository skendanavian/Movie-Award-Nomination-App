import "./SearchListItem.scss";
import Button from "./Button";

function SearchListItem({ nominees, movieData, addNominee }) {
  return (
    <li>
      {`${movieData.Title} (${movieData.Year})`}{" "}
      <Button nominees={nominees} movieData={movieData} onClick={addNominee}>
        Nominate
      </Button>
    </li>
  );
}

export default SearchListItem;
