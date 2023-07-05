import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';
import { useState, useEffect} from 'react'

import './SearchMangacss.css'



function SearchManga () {


    const searchManga = useSelector( store => store.setSearchManga)
    console.log(searchManga);

    const [ posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2)




    
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