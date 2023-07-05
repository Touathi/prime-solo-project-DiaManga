import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import LibraryPage from '../LibraryPage/LibraryPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from '../HomeManga/HomeManga';
import SearchManga from '../SearchManga/SearchManga'
import MangaDetails from '../MangaDetails/MangaDetails';
import LMangaDetail from '../LMangaDetail/LMangaDetail';
import InChapter from '../InChapter/InChaper';




import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router className='container'>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/login */}
          <Redirect exact from="/" to="/login" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/home"
          >
            <HomePage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/library"
          >
            <LibraryPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          {/* SEARCH PAGE */}
          <Route
            exact
            path="/search/:title"
          >
            {!user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <SearchManga />
            }
          </Route>
          

          {/* MANGA DETAIL PAGE */}
          <Route
            exact
            path="/mangadetails/:id/:title"
          >
          
            {!user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <MangaDetails />
            }
          </Route>

           {/* MANGA DETAIL PAGE */}
           <Route
            exact
            path='/library/mangadetails/:id/:title'
            >
            {!user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the registration page
              <LMangaDetail />
            }
          </Route>

          <Route 
            exact
            path='/workingprogress/chapter'>
            
            <InChapter />
          </Route>
        
          {/* If none of the other routes matched, we will show a 404.*/}
         <Route>
            <h1>404</h1>
          </Route>  
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
