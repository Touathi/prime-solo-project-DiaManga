import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {

    const dispatch = useDispatch();
    const history = useHistory()

    const setMangas = useSelector( store => store.SetMangaHome.setManga)
    console.log(setMangas);

    const setTrendMangas = useSelector( store => store.SetMangaHome.setTrendManga)

    const [input, setInput] = useState('')

    useEffect( () => {
        dispatch( {type: 'GET_MANGA_LIST'} )
        dispatch( {type: 'GET_TREND_MANGA_LIST'} )
    }, [dispatch]) 

    const handleSubmit = (event) => {
        event.preventDefault();

        history.push("/search")

        dispatch({
            type:'SEARCH_MANGA',
            payload: input
        })
    }


    return (
        <>
            <h3>-Home-</h3>
            <div>
                
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Search"
                        value={input}
                        onChange={(e) => (setInput(e.target.value))}
                        required
                        />
                        <button type='submit'>Search</button>
                </form>
                
            </div>
            <div id='ExploreManga'>
                <h3>Explore Manga</h3>
                {setMangas.map(manga => (
                    <MangaBook 
                        manga={manga}
                        key={manga.id} 
                    />
                ))}
            </div>
            
            <div id='TrendManga'>
                <h3>Trending manga</h3>
                {setTrendMangas.map(manga => (
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