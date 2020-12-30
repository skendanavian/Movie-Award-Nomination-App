import "./SearchListItem.scss";
import Button from "./Button";

function SearchListItem({ key, movieData, addNominee }) {
  console.log(key);
  return (
    <li>
      {`${movieData.Title} (${movieData.Year})`}{" "}
      <Button key={key} movieData={movieData} onClick={addNominee}>
        Nominate
      </Button>
    </li>
  );
}

export default SearchListItem;
