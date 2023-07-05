import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';
import MangaPost from '../MangaPost/MangaPost';
import Pagination from '../Pagination/Pagination';

import './ExploreMangacss.css'


function ExploreManga() {


    const setMangas = useSelector( store => store.SetMangaHome.setManga)
    const [loading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [mangasPerPage] = useState(40)

    // get current post
    const indexOfLastPost = currentPage * mangasPerPage;
    const indexOfFirstPost = indexOfLastPost - mangasPerPage
    const currentMangas = setMangas.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    console.log(setMangas);

    return (
        <>
            <div id='ExploreManga'>
                <h3 id='ExploreHeader'>Explore manga</h3>

                <MangaPost mangas={currentMangas} loading={loading}/>

                <div className='centerThis'>
                    <Pagination 
                        mangasPerPage= {mangasPerPage} 
                        totalPosts = {setMangas.length}
                        paginate={paginate}                 
                    />
                </div>  
            </div>
        </>
    )
}

export default ExploreManga