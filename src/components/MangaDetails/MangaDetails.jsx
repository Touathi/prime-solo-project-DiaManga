import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MangaCh from '../MangaCh/MangaCh';

import './MangaDetailscss.css'

function MangaDetails() {


    const dispatch = useDispatch();

    const [selected, setSelected] = useState(false)
    const [loading, setLoading] = useState(false)

    const mangaDetails = useSelector(store => store.setMangaBook)
    console.log(mangaDetails);


    useEffect(() => {
        dispatch({ type: 'SET_MANGA_BOOK', payload: mangaDetails })
        setLoading(true)
        console.log(mangaDetails.id);
        dispatch({ type: 'GET_MANGA_CH', payload: mangaDetails.id })
    }, [])

    console.log('The selected manga is', mangaDetails.attributes.canonicalTitle);

    const handleClick = () => {
        console.log('Add to library', mangaDetails.attributes.canonicalTitle);
        dispatch({
            type: 'ADD_TO_MANGA_BOOK',
            payload: {
                manga_id: mangaDetails.id,
                title: mangaDetails.attributes.titles.en,
                img: mangaDetails.attributes.posterImage.original,
                avg_rate: mangaDetails.attributes.averageRating,
                description: mangaDetails.attributes.synopsis,
                start_date: mangaDetails.attributes.startDate,
                updated_at: mangaDetails.attributes.updatedAt,
                status: mangaDetails.attributes.status
            }
        })
        console.log('Add to library');
        console.log('manga_id is', mangaDetails.id);
        dispatch({ type: 'ADD_TO_MANGA_LIBRARY', payload: { manga_id: mangaDetails.id } })
        setSelected(!selected)
    }
    


    return (
        <>
            <div id='detailBody'>


                <div id='title'>
                    {mangaDetails.attributes.titles.en ? (
                        <p>{mangaDetails.attributes.titles.en}</p>
                    ) : (
                        <p>{mangaDetails.attributes.canonicalTitle}</p>
                    )}
                </div>

                <div className='detailbox'>
                    {mangaDetails.attributes.posterImage ? (
                        <img src={mangaDetails.attributes.posterImage.original} className='DetailPoster' />
                    ) : (
                        <p className='NoPic'>NO picture Provided</p>
                    )}


                    <div>
                        <div className='addBtn me-5 pe-5'>
                            {!selected ? (
                                <div>
                                    <button onClick={handleClick}>Add to favorite</button>
                                </div>
                            ) : (
                                <p>Added to favorite</p>
                            )}
                        </div>

                        <div id='ratingbox'>
                            <p id='rating'>Rating:</p>
                            {mangaDetails.attributes.averageRating ? (
                                <p>
                                    {mangaDetails.attributes.averageRating}/100
                                </p>) : (
                                <p>No ratings yet</p>
                            )}
                        </div>

                        <div id='descriptionbox'>
                            <p id='description'>Description:</p>
                            {mangaDetails.attributes.synopsis ? (
                                <p className='description'>
                                    {mangaDetails.attributes.synopsis}
                                </p>
                            ) : (
                                <p>No Discription yet</p>
                            )}

                        </div>
                    </div>
                </div>

                <div id='chapterbox'>
                    <h3 className='border-bottom mt-3'>Chapters</h3>
                    <MangaCh />
                </div>
            </div>
        </>
    )
}


export default MangaDetails