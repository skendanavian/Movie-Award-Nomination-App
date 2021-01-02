import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

//fix unique key problem happening between the two lists

function NominationPanel({ nominees, nomineeTotal, removeNominee }) {
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
      {nomineeTotal < 5 && <h3>Nominations</h3>}
      {nomineeTotal === 5 && (
        <>
          <h3>Nominations (maximum reached)</h3>
        </>
      )}
      <ol>
        <div>{nominationList}</div>
      </ol>
    </div>
  );
}

export default NominationPanel;
