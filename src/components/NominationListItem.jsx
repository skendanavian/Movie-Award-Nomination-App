import Button from "./Button";
import "./NominationListItem.scss";

function NominationListItem({ movieData }) {
  return (
    <li>
      {movieData} <Button>Nominate</Button>
    </li>
  );
}

export default NominationListItem;
