const express = require('express');
const  axios = require('axios')
const router = express.Router();



// GET RECENTLY UPDATED MANGA FROM API
router.get('/', ( req, res) => {
    console.log(`getting Mangas`);
    axios.get('https://kitsu.io/api/edge/manga?page%5Blimit%5D=20&page%5Boffset%5D=0&sort=-updatedAt')
        .then( response => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch( error => {
            console.log('Error in getting mangas', error);
            res.sendStatus(500)
        })
});

// GET TRENDING MANGA FROM API
router.get('/trend', ( req, res) => {
    console.log(`getting Mangas`);
    axios.get('https://kitsu.io/api/edge/trending/manga/?limit=20')
        .then( response => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch( error => {
            console.log('Error in getting mangas', error);
            res.sendStatus(500)
        })
});

// GET SEARCHED TITLE MANGA FROM API
router.get('/search/:title', ( req, res) => {
    console.log(`getting search Mangas`);
    console.log(req.params.title);
    const query = req.params.title
    axios.get(`https://kitsu.io/api/edge/manga?filter[text]=${query}`)
        .then( response => {
            console.log(response.data);
            res.send(response.data)
        })
        .catch( error => {
            console.log('Error in getting mangas', error);
            res.sendStatus(500)
        })
});

// GET THE CHAPTERS OF THE SELECTED MANGA FROM API
router.get('/:id/mangach', async ( req, res ) => {
    try {
        console.log('In Getting manga chapters');
        console.log(req.params.id);
        let chapters = [];
        let results = await axios.get(`https://kitsu.io/api/edge/manga/${req.params.id}/chapters?page[limit]=20&page[offset]=0`);
        let maxTries = 10;
        let numberOfRuns = 0;
        // add our chapters
        chapters.push(...results.data.data)
        // console.log(results.data.links.next)
        // keep asking for more chapters
        while (results.data.links.next && numberOfRuns < maxTries) {
            numberOfRuns += 1;
            results = await axios.get(results.data.links.next);
            chapters.push(...results.data.data);
            console.log(results.data.links.next)
        }
        res.send(chapters);
    } catch (error) {
        console.log('Error in getting manga chapters', error);
        res.sendStatus(500)
    }
})


module.exports = router