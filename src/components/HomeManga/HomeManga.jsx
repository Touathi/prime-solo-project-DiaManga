import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import MangaBook from '../MangaBook/MangaBook';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function HomePage() {

    const dispatch = useDispatch();
    const history = useHistory()

    const setMangas = useSelector( store => store.setManga)
    console.log(setMangas);

    const [input, setInput] = useState('')

    useEffect( () => {
        dispatch( {type: 'GET_MANGA_LIST'} )
    }, []) 

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