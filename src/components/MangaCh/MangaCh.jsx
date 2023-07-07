import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './MangaChcss.css'

function MangaCh({loading}) {

    const mangaBookCh = useSelector( store => store.setMangaChapters)
    console.log(mangaBookCh);

    console.log(mangaBookCh);
    const history = useHistory()


    const handleClick = () => {
        history.push(`/workingprogress/chapter`)
    }

    return (
        <>
            <div className='scroll-div'>
                {mangaBookCh.map((chapter, i) => (
                    <div key={i} >
                        <button className="chapterbtn mt-2 border-bottom" onClick={handleClick}>
                            <div className='inBtn'>
                                <div className='chapter a ms-5 text-'>
                                    Chapter 
                                </div>
                                <div className='num b '>
                                    {chapter.attributes.number}
                                </div>
                            </div>
                        </button>
                    </div>
                ))}
            </div> 
        </>
    )
}

export default MangaCh