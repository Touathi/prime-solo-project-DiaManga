import React from 'react';
import './Footer.css';
import { useHistory } from 'react-router-dom';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {

  const history = useHistory();

  return <footer>
    &copy; Prime Digital Academy

    <br></br>

    <button
        type="button"
        className="btn btn_asLink"
        onClick={() => {
          history.push('/about');
        }}
    >
      About App
    </button>
    <br></br>

  </footer>;
  
}

export default Footer;
