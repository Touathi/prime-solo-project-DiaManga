import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>About My App</h1>

        <br></br>

        <p>
          DiaManga is an app designed for manga readers that has trouble keeping track of what mangas they are reading.
          The user is provided with tons of mangas to choose, current popular mangas or mangas
          that just recently had a new chapter release. Users will also be able to search manga by title name.
          This app also provides users with a personal library that they can add mangas that they are interested in reading or 
          currently reading, the app also includes a finish reading category to show users what mangas they
          had finished reading so they dont go back to reading the same manga over again.
        </p>
        </div>

        <br></br>
        <p>Technologies used:</p>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>PostgreSQL</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Express.js</li>
          <li>Kistu API</li>
        </ul>
  
    </div>
  );
}

export default AboutPage;
