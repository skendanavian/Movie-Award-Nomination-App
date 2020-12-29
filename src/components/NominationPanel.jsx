import Button from "./Button";
import NominationListItem from "./NominationListItem";
import "./NominationPanel.scss";

const testData = ["Movie 1", "Movie 2", "Movie 3"];

function NominationPanel({ input }) {
  const searchListItems = testData.map((movie) => {
    return <NominationListItem key={movie} movieData={movie} />;
  });

  return (
    <div>
      <h3>Results for "{input}" </h3>
      <div>{searchListItems}</div>
    </div>
  );
}

export default NominationPanel;
