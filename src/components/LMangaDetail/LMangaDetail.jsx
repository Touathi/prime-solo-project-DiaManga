import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MangaCh from '../MangaCh/MangaCh';
import './LMangaDetailcss.css'

function LMangaDetail() {


    const dispatch = useDispatch();

    const mangaDetails = useSelector(store => store.setMangaBook)
    console.log(mangaDetails);

    useEffect(() => {
        dispatch({ type: 'SET_MANGA_BOOK', payload: mangaDetails })
        console.log(mangaDetails.manga_id);
        dispatch({ type: 'GET_MANGA_CH', payload: mangaDetails.manga_id })
    }, [dispatch])

    console.log('The selected manga is', mangaDetails.title);
    return (
        <>
            <div id='LDetailBody'>
                <div>
                    <p className='LDetailtitle'>{mangaDetails.title}</p>
                </div>
                <div id='LDetailBox'>
                    <img src={mangaDetails.img} className='LDetailposter' />

                    <div>
                        <div id='ratingbox'>
                            <p id='rating'>Rating:</p>
                            {mangaDetails.avg_rate ? (
                                <p>
                                    {mangaDetails.avg_rate}/100</p>) : (
                                <p>No ratings yet</p>
                            )}
                        </div>

                        <div id='descriptionbox'>
                            <p id='description'>Description:</p>
                            <p> {mangaDetails.description}</p>
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

export default LMangaDetail