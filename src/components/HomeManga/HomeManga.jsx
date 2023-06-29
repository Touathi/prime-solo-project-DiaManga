import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import TrendingManga from '../TrendingManga/TrendingManga';
import ExploreManga from '../ExploreManga/ExploreManga';

import './HomeMangacss.css'

function HomePage() {

    const dispatch = useDispatch();


    useEffect( () => {
        dispatch( {type: 'GET_MANGA_LIST'} )
        dispatch( {type: 'GET_TREND_MANGA_LIST'} )
    }, [dispatch]) 



    return (
        <>
            <div id='homeBody'>
                <div id='exploreManga' className='column Left'>
                    <ExploreManga />
                </div>
                
                <div id='trendManga' className='column Right'>
                    <TrendingManga />
                </div>
            </div>
        </>
    )
}

export default HomePage