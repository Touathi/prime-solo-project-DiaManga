import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MangaCh from '../MangaCh/MangaCh';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import './MangaDetailscss.css'

function MangaDetails() {

    
    const dispatch = useDispatch();
    const params = useParams();

    const mangaDetails = useSelector(store => store.setMangaBook)
    console.log(mangaDetails);


    useEffect( () => {
        dispatch( {type: 'SET_MANGA_BOOK', payload: mangaDetails} )
        console.log(mangaDetails.id);
        dispatch( {type: 'GET_MANGA_CH', payload: mangaDetails.id})
    },[dispatch] )

    console.log('The selected manga is', mangaDetails.attributes.canonicalTitle);

    const handleClick = () => {
        console.log('Add to library', mangaDetails.attributes.canonicalTitle);
        dispatch( {type: 'ADD_TO_MANGA_BOOK', 
            payload: {
                manga_id: mangaDetails.id,
                title: mangaDetails.attributes.canonicalTitle,
                img: mangaDetails.attributes.posterImage.original,
                avg_rate: mangaDetails.attributes.averageRating,
                description: mangaDetails.attributes.synopsis,
                start_date: mangaDetails.attributes.startDate,
                updated_at: mangaDetails.attributes.updatedAt,
                status: mangaDetails.attributes.status
            }
        })

        dispatch( {type: 'ADD_TO_MANGA_LIBRARY', payload: mangaDetails.id})
    }


    return (
        <>
            <div id='detailBody'>
                <div>
                    <button onClick={handleClick}>Add to favorite</button>
                </div>    
                <div>
                    <p className='title'>{mangaDetails.attributes.canonicalTitle}</p>
                    <img src={mangaDetails.attributes.posterImage.original} className='poster'/>
                    <p className='rating'>{mangaDetails.attributes.averageRating}/100</p>
                    <p className='description'>{mangaDetails.attributes.synopsis}</p>
                </div>

                <div>
                    <h3>Chapters</h3>
                    <MangaCh />
                </div>
            </div>
        </>
    )
}


export default MangaDetails