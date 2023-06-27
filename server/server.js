const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const getMangaRouter = require('./routes/getManga.router')
const getMangaLibrary = require('./routes/getLibrary.router')
const postMangaBook = require('./routes/postLibrary.router')
const deleteMangaBook = require('./routes/deleteMangaBook.router')
const updateMangaBook = require('./routes/updateMangaBook.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/getmanga', getMangaRouter)
app.use('/api/getlibrary', getMangaLibrary)
app.use('/post/manga', postMangaBook)
app.use('/delete/manga/library', deleteMangaBook)
app.use('/update/manga/library', updateMangaBook)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
