import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';


function SearchForm() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();

        history.push(`/search/${input}`)

        dispatch({
            type:'SEARCH_MANGA',
            payload: input
        })
    }

    return(
        <div id="SearchForm">           
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="🔍 Search"
                    value={input}
                    onChange={(e) => (setInput(e.target.value))}
                    required
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}


export default SearchForm