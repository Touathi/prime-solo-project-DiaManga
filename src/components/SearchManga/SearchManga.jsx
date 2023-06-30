import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';
import { useState, useMemo } from 'react'


import './SearchMangacss.css'

const PageSize = 10



function SearchManga () {


    const searchManga = useSelector( store => store.setSearchManga)
    console.log(searchManga);
    
    return (
        <>
            -Search List-
            <div className='searchContainer'>
                {searchManga.map(manga => (              
                    <MangaBook 
                    manga={manga}
                    key={manga.id} 
                    />

                ))}
            </div> 

        </>
    )
}

export default SearchManga