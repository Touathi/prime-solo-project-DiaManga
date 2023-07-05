import React from 'react'
import MangaBook from '../MangaBook/MangaBook';


const MangaPost = ({ mangas, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    console.log(mangas);

  return (
    <>
      <div className='mapContainer'>
        {mangas.map(post => (
                <MangaBook 
                manga={post}
                key={post.id} 
            />
        ))}
       </div> 
    </>
  )
}

export default MangaPost
