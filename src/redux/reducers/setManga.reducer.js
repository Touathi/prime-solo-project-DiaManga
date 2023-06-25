
// setMangaList Reducer
const setManga = (state = [], action) => {
    switch(action.type)  {
     case 'SET_MANGAS':
       return action.payload.data;
         default:
             return state;
    }
  }


  export default setManga
