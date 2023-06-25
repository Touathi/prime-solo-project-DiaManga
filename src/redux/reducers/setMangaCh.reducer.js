// Get Manga Chapters Reducer
const setMangaChapters = (state = [], action) => {
    switch(action.type) {
      case 'SET_MANGA_CHAPTER':
        return action.payload;
          default:
            return state;
    }
  }

  export default setMangaChapters