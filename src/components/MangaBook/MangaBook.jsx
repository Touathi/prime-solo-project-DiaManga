import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './MangaBookcss.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function MangaBook({manga}) {

    const history = useHistory()

    const dispatch = useDispatch();
    console.log(manga.attributes.canonicalTitle);
    console.log(manga.id);

    

    const handleClick = (manga) => {
        console.log(manga);
        dispatch( {type: 'SET_MANGA_BOOK', payload: manga} )
        window.scrollTo(0,0)
    }


    
    return (
        <>
            <div className='mangaBook'>
                <Link to={`/mangadetails/${manga.id}/${manga.attributes.canonicalTitle}`}>
                    <img className='MangaPoster'
                        key={manga.id}  
                        src={manga.attributes.posterImage.original}
                        alt='mangaPic'
                        onClick={() => handleClick(manga)}
                    />
                </Link>
                <div className='Title'>
                    {manga.attributes.canonicalTitle}
                </div>
            </div>
        </>
    )
}

export default MangaBook