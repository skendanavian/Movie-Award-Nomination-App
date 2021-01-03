import SearchBar from "./SearchBar";
import Button from "./Button";
import movieCamera from "../components/images/movieCamera.png";
import "./SearchPanel.scss";

function SearchPanel({ handleSubmit, handleSearchBar, nomineeNumber }) {
  return (
    <div className="search-panel">
      <div className="site-logo-container ">
        <h2 className="desktop-heading">Find a Movie</h2>

        <div className="mobile-heading">
          {" "}
          <img
            className="camera-icon"
            src={movieCamera}
            alt="movie-camera-icon"
          />
        </div>
      </div>

      <SearchBar handleSearchBar={handleSearchBar} />
      <div className="submit-btn">
        <Button selected={nomineeNumber < 5} onClick={handleSubmit}>
          Submit Nominations
        </Button>
      </div>
    </div>
  );
}

export default SearchPanel;
