import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function InfoPage() {

  const dispatch = useDispatch()
  const mangaLibrary = useSelector(store => store.setMangaLibrarys.setMangaLibrary)
  console.log(mangaLibrary);

  const doneReadingLibrary = useSelector(store => store.setMangaLibrarys.setDoneReadingLibrary)
  console.log(doneReadingLibrary);

  useEffect( () => {
    dispatch( {type: 'GET_MANGA_LIBRARY'} )
}, [dispatch]) 

const handleClick = (manga) => {
  console.log( 'open manga', manga.title);
  dispatch( {type: 'SET_MANGA_BOOK', payload: manga} )
  dispatch( {type: 'GET_MANGA_LIBRARY'})
  
}

const handlePut = (manga) => {
  console.log( 'Updating manga with manga_id', manga.id);
  console.log(manga.done_reading);
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
      <div className="Library">
        <div>
          <h3>Currently Reading</h3>
          {mangaLibrary.map((manga, i) => (

            // if the manga's done_reading === true then render this
            manga.done_reading === true ? 
            (
                  <div key={i}>
                    <div>
                      <div >
                        {/* DELETE FROM DATABASE */}
                        <button onClick={() => handleDelete(manga)}>Remove</button>
                      </div>
                    </div>
                          
                    <Link 
                      to={`/library/mangadetails/${manga.manga_id}`}
                      onClick={() => handleClick(manga)}
                    >
                      <img src={manga.img} alt="manga_pic" />
                      <div>
                        {manga.title}
                      </div>
                    </Link>
                  </div>
            ) : (

                  // if the manga's done_reading === !true then render this
                  <div key={i}>
                    <div>
                      <div >
                        {/* UPDATE DONE_READING IN DATABASE */}
                        <button onClick={() => handlePut(manga)}>Finished reading</button>
                      </div>
                      <div >
                        {/* DELETE FROM DATABASE */}
                        <button onClick={() => handleDelete(manga)}>Remove</button>
                      </div>
                    </div>
                          
                    <Link 
                      to={`/library/mangadetails/${manga.manga_id}`}
                      onClick={() => handleClick(manga)}
                    >
                      <img src={manga.img} alt="manga_pic" />
                      <div>
                        {manga.title}
                      </div>
                    </Link>
                  </div>
                )
          ))}
        </div>
      </div>
    </>
  );
}

export default InfoPage;
