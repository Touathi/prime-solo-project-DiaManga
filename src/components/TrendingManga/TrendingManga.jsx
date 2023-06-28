import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './TrendingMangacss.css'
import MangaBook from '../MangaBook/MangaBook';



function TrendingManga() {

    const setTrendMangas = useSelector( store => store.SetMangaHome.setTrendManga)

    return (
        <>
            <div id='TrendManga'>
                <h3 id='header' >Trending manga</h3>
                    <div className='trendMangaContainer'>
                        {setTrendMangas.map(manga => (
                            <MangaBook 
                                manga={manga}
                                key={manga.id} 
                            />
                        ))}
                    </div>
            </div>
        </>
    )
}

export default TrendingManga