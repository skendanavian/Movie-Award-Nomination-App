import Button from "./Button";
import "./NominationListItem.scss";

function NominationListItem({ key, movieData, removeNominee }) {
  return (
    <li>
      {movieData.Title}{" "}
      <Button key={key} movieData={movieData} onClick={removeNominee}>
        Remove
      </Button>
    </li>
  );
}

export default NominationListItem;
