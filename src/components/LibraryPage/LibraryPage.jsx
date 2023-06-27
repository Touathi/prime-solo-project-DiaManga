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
}, [dispatch]) 

const handleClick = (manga) => {
  console.log( 'open manga', manga.title);
  dispatch( {type: 'SET_MANGA_BOOK', payload: manga} )
}

const handlePut = (manga) => {
  console.log( 'Updating manga with manga_id', manga.manga_id);
  dispatch( {type: 'UPDATE_MANGA_BOOK', payload: manga.id})
  dispatch( {type: 'GET_MANGA_LIBRARY'})
}

const handleDelete= (manga) => {
  console.log('Deleting manga with id', manga.id);
  dispatch( {type: 'DELETE_MANGA_BOOK', payload: manga.id})
  dispatch( {type: 'GET_MANGA_LIBRARY'})
}


  return (
    <>
      <div className="container">
        <p>Library</p>
      </div>

      <div>
  
        {mangaLibrary.map(manga => (
          <div key={manga.id}>
          <div>
            {/* UPDATE DONE_READING IN DATABASE */}
            <button onClick={() => handlePut(manga)}>Finished reading</button> 
            {/* DELETE FROM DATABASE */}
            <button onClick={() => handleDelete(manga)}>Remove</button>
          </div>
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
