import { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';

function HomePage() {

    const dispatch = useDispatch();

    const setManga = useSelector( store => store.setManga)
    console.log(setManga);

    useEffect( () => {
        dispatch( {type: 'GET_MANGA_LIST'} )
    }, []) 
    
    return (
        <>
            <h3>-Home-</h3>
        </>
    )
}

export default HomePage