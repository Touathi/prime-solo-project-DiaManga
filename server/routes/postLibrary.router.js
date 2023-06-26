const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const queryText = `INSERT INTO "manga_book" 
        ("manga_id", "title", "img", "avg_rate", "description", "start_date", "updated_at", "status")
        VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8
        )
    `
    const value = [
        req.body.manga_id, 
        req.body.title, 
        req.body.img, 
        req.body.avg_rate, 
        req.body.description,
        req.body.start_date,
        req.body.update_at,
        req.body.status
    ]
    pool.query(queryText, value)
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('Error in posting', err);
        })
})

module.exports = router