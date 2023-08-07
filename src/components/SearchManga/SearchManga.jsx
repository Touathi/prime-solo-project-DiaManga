import { useDispatch, useSelector } from "react-redux";
import MangaBook from "../MangaBook/MangaBook";
import { useState, useEffect } from "react";
import MangaPagi from "../MangaPagi/MangaPagi";
import Pagination from "../Pagination/Pagination";

import "./SearchMangacss.css";

function SearchManga() {
  const searchManga = useSelector((store) => store.setSearchManga);
  console.log(searchManga);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mangasPerPage] = useState(20);

  const indexOfLastPost = currentPage * mangasPerPage;
  const indexOfFirstPost = indexOfLastPost - mangasPerPage;
  const currentMangas = searchManga.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {" "}
      <div className="mt-5 mb-3 text-center ">-Search List-</div>
      <div className="searchContainer">
        <MangaPagi mangas={currentMangas} loading={loading} />
      </div>
      <div className="centerThis">
        <Pagination
          mangasPerPage={mangasPerPage}
          totalPosts={searchManga.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default SearchManga;
