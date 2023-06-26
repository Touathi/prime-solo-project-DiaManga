import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import setManga from './setManga.reducer'
import setMangaBook from './setMangaBook.reducer';
import setMangaChapters from './setMangaCh.reducer';
import setSearchManga from './setSearchManga.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  setManga, // Renders manga onto the home page
  setMangaBook, // Holds the info of the selected manga
  setMangaChapters, // contains the chapters of the selected manga
  setSearchManga, // holds searched up mangas
});

export default rootReducer;
