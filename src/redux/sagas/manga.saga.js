import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// GET MANGA SAGA
function* getManga() {
    try {
      const fetchMangas = yield axios.get('/api/getmanga')
      yield put ( {type:'SET_MANGAS', payload: fetchMangas.data})
    }
    catch( error ) {
      console.log('Error in getting manga', error);
    }
  }
  
  function* getMangaCh(action) {
    try {
      const mangaChResponse = yield axios.get(`/api/getmanga/${action.payload}/mangach`)
      yield put ( {type: 'SET_MANGA_CHAPTER', payload: mangaChResponse.data} )
    }
    catch(error) {
      console.log('Error in getting manga chatpers', error);
    }
  }

  function* searchManga (action) {
    try {
      const searchMangaRes = yield axios.get(`api/getmanga/search/${action.payload}`)
      yield put ( {type:'SET_SEARCH_MANGA', payload: searchMangaRes.data.data})
    }
    catch( err ) {
      console.log(`Error in searching manga`, err);
    }
  
  }
  
  function* getMangaLibrary () {
    try {
      const mangaLibrary = yield axios.get('/api/getlibrary')
      yield put ( {type: 'SET_MANGA_LIBRARY', payload: mangaLibrary.data} )
    }
    catch(err) {
      console.log('Error in getting manga library', err);
    }
  }

  function* mangaSaga() {
    yield takeLatest('GET_MANGA_LIST', getManga)
    yield takeLatest('GET_MANGA_CH', getMangaCh)
    yield takeLatest('SEARCH_MANGA', searchManga)
    yield takeLatest('GET_MANGA_LIBRARY', getMangaLibrary)
  }

export default mangaSaga