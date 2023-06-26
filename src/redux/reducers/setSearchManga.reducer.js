// Get Manga Chapters Reducer
const setSearchManga = (state = [], action) => {
    switch(action.type) {
      case 'SET_SEARCH_MANGA':
        return action.payload;
          default:
            return state;
    }
  }

  export default setSearchManga