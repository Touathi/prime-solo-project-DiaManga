import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const dispatch = useDispatch()
  const mangaLibrary = useSelector(store => store.setMangaLibrary)
  console.log(mangaLibrary);

  useEffect( () => {
    dispatch( {type: 'GET_MANGA_LIBRARY'} )
}, []) 

const handleClick = (manga) => {
  console.log(manga);
  dispatch( {type: 'SET_MANGA_BOOK', payload: manga} )
}


  return (
    <>
      <div className="container">
        <p>Library</p>
      </div>

      <div>
        <div>
          {/* UPDATE DONE_READING IN DATABASE */}
          <button>Finished reading</button> 
          {/* DELETE FROM DATABASE */}
          <button>Remove</button>
        </div>
        {mangaLibrary.map(manga => (
          <div key={manga.id}>
            <Link to='/library/mangadetails'
              onClick={() => handleClick(manga)}>
            <img src={manga.img} alt="manga_pic" />
            <div>
              {manga.title}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default InfoPage;
