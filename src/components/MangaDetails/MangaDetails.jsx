import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MangaCh from '../MangaCh/MangaCh';

function MangaDetails() {

    const history = useHistory()
    const dispatch = useDispatch();

    const mangaDetails = useSelector(store => store.setMangaBook)
    console.log(mangaDetails);


    useEffect( () => {
        dispatch( {type: 'SET_MANGA_BOOK', payload: mangaDetails} )
        console.log(mangaDetails.id);
        dispatch( {type: 'GET_MANGA_CH', payload: mangaDetails.id})
    },[dispatch] )

    console.log('The selected manga is', mangaDetails.attributes.canonicalTitle);


    return (
        <>
            <div>
                <button>Add to favorite</button>
            </div>    
            <div>
                <p>{mangaDetails.attributes.canonicalTitle}</p>
                <img src={mangaDetails.attributes.posterImage.tiny}/>
                <p>{mangaDetails.attributes.averageRating}/100</p>
                <p>{mangaDetails.attributes.synopsis}</p>
            </div>

            <div>
                <MangaCh />
            </div>
        </>
    )
}


export default MangaDetails