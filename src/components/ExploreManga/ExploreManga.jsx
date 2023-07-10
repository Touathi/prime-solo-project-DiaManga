import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MangaPagi from '../MangaPagi/MangaPagi';
import Pagination from '../Pagination/Pagination';

import './ExploreMangacss.css'


function ExploreManga() {


    const setMangas = useSelector(store => store.SetMangaHome.setManga)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [mangasPerPage] = useState(30)

    // get current post
    const indexOfLastPost = currentPage * mangasPerPage;
    const indexOfFirstPost = indexOfLastPost - mangasPerPage
    const currentMangas = setMangas.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)



    return (
        <>
            <div id='ExploreManga'>
                <h3 id='ExploreHeader'>Explore manga</h3>

                <MangaPagi mangas={currentMangas} loading={loading} />

                <div className='centerThis'>
                    <Pagination
                        mangasPerPage={mangasPerPage}
                        totalPosts={setMangas.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </>
    )
}

export default ExploreManga