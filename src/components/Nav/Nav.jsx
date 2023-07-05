import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import SearchForm from '../SearchForm/SearchForm';

function Nav() {
  const user = useSelector((store) => store.user);

  

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">DiaM💎nga</h2>
      </Link>
      <div>
        <div>
            {/* If no user is logged in, show these links */}
            {!user.id && (
              // If there's no user, show login/registration links
              <Link className="navLink" to="/login">
                Login / Register
              </Link>
            )}

            {/* If a user is logged in, show these links */}
              {user.id && (
                <>
                  <div className='ms-5 ps-5'>
                  <Link className="navLink" to="/home">
                    Home
                  </Link>

                  <Link className="navLink" to="/library">
                    Library
                  </Link>

                  <LogOutButton 
                    className="navLink"
                    user={user.username} />
                  </div> 

                  <div className='search me-5'>
                    <SearchForm />
                  </div>
                </>
              )}
          </div>
        </div>
    </div>
  );
}

export default Nav;
