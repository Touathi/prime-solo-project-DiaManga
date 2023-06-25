const express = require('express');


const  axios = require('axios')

const router = express.Router();

router.get('/', ( req, res) => {
    console.log(`getting Mangas`);
    axios.get('https://kitsu.io/api/edge/trending/manga/?limit=25')
        .then( response => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch( error => {
            console.log('Error in getting mangas', error);
            res.sendStatus(500)
        })
});


router.get(`/:id`, ( req, res ) => {
    console.log(`Getting manga info`);
    console.log(req.params.id);
    axios.get()
})

module.exports = router