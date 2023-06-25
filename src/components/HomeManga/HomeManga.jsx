import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';

function HomePage() {

    const dispatch = useDispatch();

    const setMangas = useSelector( store => store.setManga)
    console.log(setMangas);

    useEffect( () => {
        dispatch( {type: 'GET_MANGA_LIST'} )
    }, []) 

    return (
        <>
            <h3>-Home-</h3>
            <div>
                {setMangas.map(manga => (
                    <MangaBook 
                        manga={manga}
                        key={manga.id} 
                    />
                ))}
            </div>
        </>
    )
}

export default HomePage