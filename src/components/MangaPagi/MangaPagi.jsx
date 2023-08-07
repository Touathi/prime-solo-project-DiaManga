import React from "react";
import MangaBook from "../MangaBook/MangaBook";

const MangaPagi = ({ mangas, loading }) => {
  return (
    <>
      <div className="mapContainer">
        {mangas.map((post) => (
          <MangaBook manga={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default MangaPagi;
