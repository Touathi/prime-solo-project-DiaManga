// Get Manga Chapters Reducer
const setMangaLibrary = (state = [], action) => {
    switch(action.type) {
      case 'SET_MANGA_LIBRARY':
        return action.payload;
          default:
            return state;
    }
  }

  export default setMangaLibrary