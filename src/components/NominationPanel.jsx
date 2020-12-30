import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

function NominationPanel({ nominees, removeNominee }) {
  const nominationList = nominees.map((movie, index) => {
    return (
      <NominationListItem
        key={index}
        movieData={movie}
        removeNominee={removeNominee}
      />
    );
  });

  return (
    <div>
      <h3>Nominations</h3>
      <div>{nominationList}</div>
    </div>
  );
}

export default NominationPanel;
