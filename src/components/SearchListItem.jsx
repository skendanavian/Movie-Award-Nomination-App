import { useEffect, useState } from "react";
import "./SearchListItem.scss";
import Button from "./Button";

function SearchListItem({ nominees, movieData, addNominee }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (nominees !== undefined) {
      nominees.find((item) => {
        if (item.title === movieData.Title) {
          setSelected(true);
          return;
        }
        return;
      });
    }
  }, [nominees, movieData, selected]);
  return (
    <li>
      {`${movieData.Title} (${movieData.Year})`}{" "}
      <Button
        selected={selected}
        nominees={nominees}
        movieData={movieData}
        onClick={addNominee}
      >
        Nominate
      </Button>
    </li>
  );
}

export default SearchListItem;
