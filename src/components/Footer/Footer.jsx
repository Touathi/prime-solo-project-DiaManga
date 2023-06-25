import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {

  return <footer>
    &copy; Prime Digital Academy

    <br></br>

    <Link to="/about">
          About App
    </Link>

    <br></br>

  </footer>;
  
}

export default Footer;
