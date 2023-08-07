import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./MangaBookcss.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MangaBook({ manga }) {
  const history = useHistory();

  const dispatch = useDispatch();
  console.log(manga.attributes.canonicalTitle);
  console.log(manga.id);

  const handleClick = (manga) => {
    console.log(manga);
    dispatch({ type: "SET_MANGA_BOOK", payload: manga });
    history.push(
      `/mangadetails/${manga.id}/${manga.attributes.canonicalTitle}`
    );
    window.scrollTo(0, 0);
  };

  console.log(manga.attributes.titles.en);
  return (
    <>
      <div className="mangaBook">
        {manga.attributes.posterImage ? (
          <button className="imgBtn">
            <img
              className="MangaPoster"
              key={manga.id}
              src={manga.attributes.posterImage.original}
              alt="mangaPic"
              onClick={() => handleClick(manga)}
            />
          </button>
        ) : (
          <button className="imgBtn" onClick={() => handleClick(manga)}>
            <p>No picture Provided</p>
          </button>
        )}
        <div className="Title">
          {manga.attributes.titles.en ? (
            <p>{manga.attributes.titles.en}</p>
          ) : (
            <p>{manga.attributes.canonicalTitle}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MangaBook;
