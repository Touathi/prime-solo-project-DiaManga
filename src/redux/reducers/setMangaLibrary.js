import { combineReducers } from "redux";


// Get Manga Chapters Reducer
const setMangaLibrary = (state = [], action) => {
    switch(action.type) {
      case 'SET_MANGA_LIBRARY':
        return action.payload;
          default:
            return state;
    }
  }

  const setDoneReadingLibrary = (state = [], action) => {
    switch(action.type) {
      case 'SET_DONE_READING_LIBRARY':
        return action.payload;
          default:
            return state;
    }
  }

  const MangaLibrarys = combineReducers({
    setMangaLibrary,
    setDoneReadingLibrary
  })



  export default MangaLibrarys