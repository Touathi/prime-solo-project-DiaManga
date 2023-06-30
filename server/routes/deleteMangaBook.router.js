const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// DELETE MANGA FROM THE LIBRARY
router.delete('/:id', (req, res) => {
    console.log('delete manga with the id', req.params.id);
    const queryText = `
        DELETE FROM "manga_library"
        WHERE "id" = $1;
    `;
    const IDtoDelete = req.params.id
    const queryText1 = `
    DELETE FROM "manga_book"
    WHERE "id" = $1;
`;
    const MangaIdToDel = req.params.mangaid
    pool.query(queryText, [IDtoDelete])
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('Error in deleting manga in manga_library DB', err);
        })
})

// DELETE MANGA FROM THE MANGA_BOOK
router.delete('/mangabook/:mangaid', (req, res) => {
    console.log('delete manga with the manga id', req.params.mangaid);
    const queryText = `
        DELETE FROM "manga_book"
        WHERE "manga_id" = $1;
    `;
    const MangaIdToDel = req.params.mangaid
    pool.query(queryText, [MangaIdToDel])
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('Error in deleting manga in manga_book DB', err);
        })
})


module.exports = router