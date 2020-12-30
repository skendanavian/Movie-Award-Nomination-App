import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

function NominationPanel({ nominees, removeNominee }) {
  const nominationList = nominees.map((movie) => {
    return (
      <NominationListItem
        key={movie.Title}
        movie={movie}
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
