import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './MangaChcss.css'

function MangaCh({mangaDetails}) {

    const history = useHistory()
    console.log(mangaDetails);
    const handleClick = (chapter) => {
        history.push(`/workingprogress/chapter`)
    }
    
    const mangaBookCh = useSelector( store => store.setMangaChapters)
    console.log(mangaBookCh);

    return (
        <> 
            <div className="chapters">
                {mangaBookCh.map((chapter, i) => (
                
                    <div key={i}>
                        <button className="chapterbtn" onClick={() => handleClick(chapter) }>Chapter {chapter.attributes.number}</button>
                    </div>
                    
                ))}
            </div>    
        </>
    )
}

export default MangaCh