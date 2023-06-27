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
    pool.query(queryText, [IDtoDelete])
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('Error in deleting manga in manga_library DB', err);
        })
})


module.exports = router