// Get Manga Book Reducer
const setMangaBook = (state = [], action) => {
  switch (action.type) {
    case 'SET_MANGA_BOOK':
      return action.payload;
    default:
      return state;
  }
}


export default setMangaBook