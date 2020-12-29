import Button from "./Button";
import "./NominationListItem.scss";

function NominationListItem({ movieData }) {
  return (
    <li>
      {movieData} <Button>Remove</Button>
    </li>
  );
}

export default NominationListItem;
