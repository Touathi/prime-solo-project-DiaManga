import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';
import './ExploreMangacss.css'


function ExploreManga() {


    const setMangas = useSelector( store => store.SetMangaHome.setManga)
    console.log(setMangas);

    return (
        <>
            <div id='ExploreManga'>
                <h3>Explore manga</h3>
                <div className='exploreMangaContainer'> 
                    {setMangas.map(manga => (
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

export default ExploreManga