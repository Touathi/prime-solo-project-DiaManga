import { useSelector } from "react-redux"

function MangaCh() {
    
    const mangaBookCh = useSelector( store => store.setMangaChapters)
    console.log(mangaBookCh);

    return (
        <>
            {mangaBookCh.map((chapter, i) => (
                <div key={i}>
                    <p>Chapter {chapter.attributes.number}</p>
                </div>
            ))}
        </>
    )
}

export default MangaCh