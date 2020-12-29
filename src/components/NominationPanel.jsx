import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

function NominationPanel({ nominees }) {
  const nominationList = nominees.map((movie, index) => {
    return <NominationListItem key={index} movieData={movie} />;
  });

  return (
    <div>
      <h3>Nominations</h3>
      <div>{nominationList}</div>
    </div>
  );
}

export default NominationPanel;
