import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

//fix unique key problem happening between the two lists

function NominationPanel({ nominees, removeNominee }) {
  let nominationList;

  if (nominees) {
    nominationList = nominees.map((movie) => {
      return (
        <NominationListItem
          key={movie.Title}
          movie={movie}
          removeNominee={removeNominee}
        />
      );
    });
  }

  return (
    <div className="nominee-panel">
      <h3>Nominations</h3>
      <div>{nominationList}</div>
    </div>
  );
}

export default NominationPanel;
