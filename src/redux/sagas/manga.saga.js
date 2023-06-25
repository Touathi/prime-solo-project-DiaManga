import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// GET MANGA SAGA
function* getManga() {
    try {
      const trendingMangas = yield axios.get('/api/getmanga')
      yield put ( {type:'SET_MANGAS', payload: trendingMangas.data})
    }
    catch( error ) {
      console.log('Error in getting manga', error);
    }
  }
  
  function* getMangaCh(action) {
    try {
      const mangaChResponse = yield axios.get(`/api/getmangach/${action.payload}/`)
      yield put ( {type: 'SET_MANGA_CHAPTER', payload: mangaChResponse.data} )
    }
    catch(error) {
      console.log('Error in getting manga chatpers', error);
    }
  }


  function* mangaSaga() {
    yield takeLatest('GET_MANGA_LIST', getManga)
    yield takeLatest('GET_MANGA_CH', getMangaCh)
  }

export default mangaSaga