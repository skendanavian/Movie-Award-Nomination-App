import Button from "./Button";
import "./NominationListItem.scss";

function NominationListItem({ movie, removeNominee }) {
  return (
    <li>
      {`${movie.title} (${movie.year})`}
      <Button movieData={movie} onClick={removeNominee}>
        Remove
      </Button>
    </li>
  );
}

export default NominationListItem;
