import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



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

                    
                    <div>
                        {manga.attributes.canonicalTitle}
                    </div>
                    <Link to='/mangadetails'>
                        <img 
                            key={manga.id}  
                            src={manga.attributes.posterImage.tiny}
                            alt='mangaPic'
                            onClick={() => handleClick(manga)}
                        />
                    </Link>
                </div>

                <div>


                </div>
        </>
    )
}

export default MangaBook