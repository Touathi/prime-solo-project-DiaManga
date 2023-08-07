import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TrendingMangacss.css";
import MangaBook from "../MangaBook/MangaBook";

function TrendingManga() {
  const setTrendMangas = useSelector(
    (store) => store.SetMangaHome.setTrendManga
  );

  return (
    <>
      <div id="TrendManga">
        <h3 id="TrendHeader">Trending manga</h3>
        <div className="trendMangaContainer">
          {setTrendMangas.map((manga) => (
            <div className="trendBook" key={manga.id}>
              <MangaBook manga={manga} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingManga;
