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
        {nomineeTotal <= 5 && (
          <>
            <h3>Nominations</h3>
            <p className="counter-text">({nomineeTotal} / 5)</p>
          </>
        )}
      </div>
      {nomineeTotal === 0 && (
        <>
          <p className="status-text">
            Instructions: <br />
            1. Search for movie titles <br />
            2. Nominate exactly 5 movies <br />
            3. Submit your nominations
            <br />
          </p>
        </>
      )}

      <ol>
        <div>{nominationList}</div>
      </ol>
    </div>
  );
}

export default NominationPanel;
