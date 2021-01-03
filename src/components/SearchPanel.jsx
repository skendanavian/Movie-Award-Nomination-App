import SearchBar from "./SearchBar";
import movieCamera from "../components/images/movieCamera.png";
import "./SearchPanel.scss";

function SearchPanel({ handleSearchBar }) {
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
    </div>
  );
}

export default SearchPanel;
