import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import MangaCh from '../MangaCh/MangaCh';
import './LMangaDetailcss.css'

function LMangaDetail() {
    
    
    const dispatch = useDispatch();

    const mangaDetails = useSelector(store => store.setMangaBook)
    console.log(mangaDetails);

    useEffect( () => {
        dispatch( {type: 'SET_MANGA_BOOK', payload: mangaDetails} )
        console.log(mangaDetails.manga_id);
        dispatch( {type: 'GET_MANGA_CH', payload: mangaDetails.manga_id})
    },[dispatch] )

    console.log('The selected manga is', mangaDetails.title);
    return (
        <>
            <div id='LDetailBody'>
                <div>
                    <p className='LDetailtitle'>{mangaDetails.title}</p>
                    <img src={mangaDetails.img} className='LDetailposter'/>
                    <p className='rating'>{mangaDetails.avg_rate}/100</p>
                    <p className='discription'>{mangaDetails.description}</p>
                </div>
                <div>
                    <h3>Chapters</h3>
                    <MangaCh />
                </div>
            </div>
        </>
    )
}

export default LMangaDetail