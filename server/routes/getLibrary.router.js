const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.get('/', (req, res) => {
    if(req.isAuthenticated() && req.user.id === req.user.id){
        console.log('is authenticated?', req.isAuthenticated())
        console.log('user', req.user.id)
        userID = req.user.id
        let queryText = `
            SELECT * FROM "manga_book"
            JOIN "manga_library" ON "manga_library"."manga_book_id" = "manga_book"."manga_id"
            AND "user_id" = $1;
        `;
        pool.query(queryText, [userID])
        .then((result) => {
          res.send(result.rows)
        })
        .catch((error) => {
          console.log('error in get server', error)
          res.sendStatus(418)
        })
    }
    else {
        res.sendStatus(403)
    }
})


module.exports = router