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
      <div className="count-box">
        {nomineeTotal <= 5 && (
          <>
            <h3>Nominations</h3>
            <p className="counter-text">({nomineeTotal} / 5)</p>
          </>
        )}
        {/* {nomineeTotal === 5 && (
          <>
            <h3>Nominations</h3>
            <p className="red-text">({nomineeTotal} / 5)</p> */}
        {/* </>
        )} */}
      </div>

      <ol>
        <div>{nominationList}</div>
      </ol>
    </div>
  );
}

export default NominationPanel;
