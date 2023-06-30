import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './LibraryPagecss.css'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function InfoPage() {

  const history = useHistory()

  const dispatch = useDispatch()
  const mangaLibrary = useSelector(store => store.setMangaLibrarys.setMangaLibrary)
  console.log(mangaLibrary);

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
  console.log('Deleting manga with id', manga.id, manga.manga_id);
  dispatch( {type: 'DELETE_MANGA_BOOK', payload: {id: manga.id, mangaid: manga.manga_id}} )
  dispatch( {type: 'GET_MANGA_LIBRARY'})
}



  return (
    <>
      <div className="Library">
        <div>
          <h3>My Library</h3>
          <div className='mapLibContainer'>
            {mangaLibrary.map((manga, i) => (

              // if the manga's done_reading === true then render this
              manga.done_reading === true ? 
              (
                      <div key={i}  className='mangaBook'>

                        <div onClick={() => handleClick(manga)}>
                          <Link to={`/library/mangadetails/${manga.manga_id}/${manga.title}`}>
                          <img src={manga.img} alt="manga_pic" className='Libposter' />
                          </Link>

                          <div className='Libtitle'>
                            {manga.title}
                          </div>
                          <div >
                          {/* DELETE FROM DATABASE */}
                          <button onClick={() => handleDelete(manga)}>Remove</button>
                        </div>
                        </div>

                      </div>
                
              ) : (
                <div className='LibContainer'  key={i} >
                    {/* // if the manga's done_reading === !true then render this */}
                    <div className='mangaBook'>
                      <div>

                        <div >
                          {/* UPDATE DONE_READING IN DATABASE */}
                          <button onClick={() => handlePut(manga)}>Finished reading</button>
                        </div>
                        


                      </div>
                            
                      <div onClick={() => handleClick(manga)}>

                        <Link to={`/library/mangadetails/${manga.manga_id}/${manga.title}`}>
                        <img src={manga.img} alt="manga_pic" className='Libposter' />
                        </Link>

                        <div className='Libtitle'>
                          {manga.title}
                        </div>
                        <div >
                          {/* DELETE FROM DATABASE */}
                          <button onClick={() => handleDelete(manga)}>Remove</button>
                        </div>

                      </div> 
                    </div>
                </div>
                  )
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
