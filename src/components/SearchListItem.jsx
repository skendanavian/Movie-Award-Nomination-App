import "./SearchListItem.scss";
import Button from "./Button";

function SearchListItem({ disabled, nominees, movieData, addNominee }) {
  return (
    <li>
      {`${movieData.Title} (${movieData.Year})`}{" "}
      <Button
        disabled={disabled}
        nominees={nominees}
        movieData={movieData}
        onClick={addNominee}
      >
        Nominate
      </Button>
    </li>
  );
}

export default SearchListItem;
