const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// UPDATE DONE_READING IN MANGA LIBRARY
router.put('/:id', (req, res) => {
    console.log('Currently updating manga with the id', req.params.id);
    
    const queryText = `
        UPDATE "manga_library"
        SET "done_reading" = TRUE
        WHERE "id" = $1;
    `
    const IDtoUpdate = req.params.id
    pool.query(queryText, [IDtoUpdate])
        .then(result => {
            res.sendStatus(200)
            console.log('Finished updating');
        })
        .catch(err => {
            console.log('Error in updatting manga in manga_library DB');  
        })
})

module.exports = router