import "./SearchListItem.scss";
import Button from "./Button";

function SearchListItem({ movieData }) {
  return (
    <li>
      {`${movieData.Title} (${movieData.Year})`} <Button>Nominate</Button>
    </li>
  );
}

export default SearchListItem;
