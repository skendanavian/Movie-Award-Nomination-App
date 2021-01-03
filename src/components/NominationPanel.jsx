import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

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
      <div className="count-box">
        {nomineeTotal === 0 && (
          <>
            <h3>Nominations</h3>
            <p className="counter-text">(5 movies)</p>
          </>
        )}
        {nomineeTotal > 0 && (
          <>
            <h3>Nominations</h3>
            <p className="counter-text">({nomineeTotal} / 5)</p>
          </>
        )}
      </div>

      <ol>
        <div>{nominationList}</div>
      </ol>
    </div>
  );
}

export default NominationPanel;
