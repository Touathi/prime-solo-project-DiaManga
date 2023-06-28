import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import SetMangaHome from './setManga.reducer'
import setMangaBook from './setMangaBook.reducer';
import setMangaChapters from './setMangaCh.reducer';
import setSearchManga from './setSearchManga.reducer';
import setMangaLibrarys from './setMangaLibrary';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  SetMangaHome, // Renders manga onto the home page
  setMangaBook, // Holds the info of the selected manga
  setMangaChapters, // contains the chapters of the selected manga
  setSearchManga, // holds searched up mangas
  setMangaLibrarys // Contains all the manga in the library Database
});

export default rootReducer;
