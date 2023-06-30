import { combineReducers } from "redux";


// setMangaList Reducer
const setManga = (state = [], action) => {
    switch(action.type)  {
     case 'SET_MANGAS':
       return action.payload;
         default:
             return state;
    }
  }

  const setTrendManga = (state = [], action) => {
    switch(action.type)  {
     case 'SET_TREND_MANGA_BOOK':
       return action.payload.data;
         default:
             return state;
    }
  }

  const SetMangaHome = combineReducers({
    setManga,
    setTrendManga  
  })

  export default SetMangaHome
