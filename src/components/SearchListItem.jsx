import "./SearchListItem.scss";
import Button from "./Button";

function SearchListItem({ movieData, addNominee }) {
  return (
    <li>
      {`${movieData.Title} (${movieData.Year})`}{" "}
      <Button movieData={movieData} onClick={addNominee}>
        Nominate
      </Button>
    </li>
  );
}

export default SearchListItem;
