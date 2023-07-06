import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';


// GET MANGAS FROM API

function* getManga() {
    try {
      const fetchMangas = yield axios.get('/api/getmanga')
      yield put ( {type:'SET_MANGAS', payload: fetchMangas.data})
    }
    catch( error ) {
      console.log('Error in getting manga', error);
    }
  }

function* getTrendManga() {
    try {
      const fetcTrendMangas = yield axios.get('/api/getmanga/trend')
      yield put ( {type:'SET_TREND_MANGA_BOOK', payload: fetcTrendMangas.data})
    }
    catch( error ) {
      console.log('Error in getting manga', error);
    }
  }
// GET MANGA CH API
  function* getMangaCh(action) {
    try {
      const mangaChResponse = yield axios.get(`/api/getmanga/${action.payload}/mangach`)
      yield put ( {type: 'SET_MANGA_CHAPTER', payload: mangaChResponse.data} )
    }
    catch(error) {
      console.log('Error in getting manga chatpers', error);
    }
  }

// SEARCH MANGA FROM API
  function* searchManga (action) {
    try {
      const searchMangaRes = yield axios.get(`api/getmanga/search?title=${action.payload}`)
      yield put ( {type:'SET_SEARCH_MANGA', payload: searchMangaRes.data})
    }
    catch( err ) {
      console.log(`Error in searching manga`, err);
    }
  
  }

  // GET MANGA RENDER IN LIBRARY
  function* getMangaLibrary () {
    try {
      const mangaLibrary = yield axios.get('/api/getlibrary')
      yield put ( {type: 'SET_MANGA_LIBRARY', payload: mangaLibrary.data} )
    }
    catch(err) {
      console.log('Error in getting manga library', err);
    }
  }

  function* getDoneReadingLibrary () {
    try {
      const mangaLibrary = yield axios.get('/api/getlibrary')
      yield put ( {type: 'SET_DONE_READING_LIBRARY', payload: mangaLibrary.data} )
    }
    catch(err) {
      console.log('Error in getting manga library', err);
    }
  }

// ADD TO MANGA_BOOK DATABASE
  function* addToMangaBook (action) {
    console.log(action.payload);
    try{
      yield axios.post('/post/manga', action.payload)
    }
    catch(err) {
      console.log('Error in posting to manga_book database');
    }
  }

// ADD TO MANGA TO LIBRARY
  function* addToMangaLibrary(action) {
    console.log(action.payload);
    try {
      yield axios.post('/post/manga/library', action.payload)
    }
    catch(err) {
      console.log('Error in posting in manga_library database');
    }
  }

// UPDATE MANGA TO DONE READING IN DATABASE
function* updateManga(action) {
  try {
    yield axios.put(`/update/manga/library/${action.payload}`)
  }
  catch(err) {
    console.log('Failed to update manga_id', action.payload);
  }
}


// DELETE MANGA IN LIBRARY IN DATABASE
function* deleteMangaFromLibrary(action) {
  console.log(action.payload);

  try {
    yield axios.delete(`/delete/manga/library/${action.payload.id}`)
  }
  catch(err) {
    console.log('Failed to delete manga_id', action.payload.id);
  }
}

// DELETE MANGA IN LIBRARY IN DATABASE
function* deleteMangaFromBook(action) {
  console.log(action.payload);

  try {
    yield axios.delete(`/delete/manga/library/mangabook/${action.payload.mangaid}`)
  }
  catch(err) {
    console.log('Failed to delete manga_id', action.payload.mangaid);
  }
}


  function* mangaSaga() {
    yield takeLatest('GET_MANGA_LIST', getManga)
    yield takeLatest('GET_TREND_MANGA_LIST', getTrendManga)
    yield takeLatest('GET_MANGA_CH', getMangaCh)
    yield takeLatest('SEARCH_MANGA', searchManga)
    yield takeLatest('GET_MANGA_LIBRARY', getMangaLibrary)
    yield takeLatest('ADD_TO_MANGA_BOOK', addToMangaBook)
    yield takeLatest('ADD_TO_MANGA_LIBRARY', addToMangaLibrary)
    yield takeLatest('UPDATE_MANGA_BOOK', updateManga)
    yield takeLatest('DELETE_MANGA_BOOK', deleteMangaFromLibrary)
    yield takeLatest('DELETE_MANGA_BOOK', deleteMangaFromBook)
    yield takeLatest('GET_DONE_READING_LIBRARY', getDoneReadingLibrary)
  }

export default mangaSaga