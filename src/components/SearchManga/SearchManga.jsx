import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';

function SearchManga () {

    const searchManga = useSelector( store => store.setSearchManga)
    console.log(searchManga);
    
    return (
        <>
            -Search List-
            {searchManga.map(manga => (
                <MangaBook 
                manga={manga}
                key={manga.id} 
            />
            ))}
        </>
    )
}

export default SearchManga