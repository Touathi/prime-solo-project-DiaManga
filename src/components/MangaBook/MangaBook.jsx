import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './MangaBookcss.css'



function MangaBook({manga}) {


    const dispatch = useDispatch();
    console.log(manga.attributes.canonicalTitle);
    console.log(manga.id);

    

    const handleClick = (manga) => {
        console.log(manga);
        dispatch( {type: 'SET_MANGA_BOOK', payload: manga} )
    }


    
    return (
        <>
            <div>
                <div className='Title'>
                    {manga.attributes.canonicalTitle}
                </div>
                <Link to={`/mangadetails/${manga.id}`}>
                    <img className='MangaPoster'
                        key={manga.id}  
                        src={manga.attributes.posterImage.original}
                        alt='mangaPic'
                        onClick={() => handleClick(manga)}
                    />
                </Link>
            </div>
        </>
    )
}

export default MangaBook