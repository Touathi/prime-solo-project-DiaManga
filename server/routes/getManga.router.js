const express = require('express');
const  axios = require('axios')
const router = express.Router();



// GET RECENTLY UPDATED MANGA FROM API
// Get the recently updated mangas from api and loop thru the next link
router.get('/', async (req, res) => {
    try {
        console.log('getting updated manga in loop');
        let mangas = [];
        let results = await axios.get('https://kitsu.io/api/edge/manga?page%5Blimit%5D=10&page%5Boffset%5D=0&sort=-updatedAt,ageRating&type=manga')
        let maxTries = 25
        let numberOfRuns = 0
        // add to mangas
        mangas.push(...results.data.data)
        while (results.data.links.next && numberOfRuns < maxTries) {
            numberOfRuns += 1;
            results = await axios.get(results.data.links.next)
            mangas.push(...results.data.data)
            console.log('next',results.data.links.next);
        }
        res.send(mangas)
    } catch(error) {
        console.log('Error in looping thru updated mangas', error);
        res.sendStatus(500)
    }
})


// GET TRENDING MANGA FROM API
router.get('/trend', ( req, res) => {
    console.log(`getting Trending Mangas`);
    axios.get('https://kitsu.io/api/edge/trending/manga/?limit=20')
        .then( response => {
            console.log('trend route',response.data);
            res.send(response.data)
        })
        .catch( error => {
            console.log('Error in getting mangas', error);
            res.sendStatus(500)
        })
});


router.get('/search/:title', async (req, res) => {
    try {
        console.log(`getting search Mangas`);
        console.log(req.params.title);
        const query = req.params.title
        let searchMangas = [];
        let results = await axios.get(`https://kitsu.io/api/edge/manga?filter%5Btext%5D=${query}&page%5Blimit%5D=20&page%5Boffset%5D=0`)
        let maxTries = 10
        let numberOfRuns = 0
        
        // add to searchMangas
        searchMangas.push(...results.data.data)
        // console.log('links',results.data.links.next);
        while (results.data.links.next && numberOfRuns < maxTries) {
            numberOfRuns += 1;
            results = await axios.get(results.data.links.next)
            searchMangas.push(...results.data.data)
            console.log('next',results.data.links.next);
        }
        res.send(searchMangas)
    } catch(error) {
        console.log('Error in looping thru updated mangas', error);
        res.sendStatus(500)
    }
})

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
        // keep asking for more chapters
        while (results.data.links.next && numberOfRuns <= maxTries) {
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