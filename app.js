/* Variables initialization */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const fs = require('fs');

const newsRouter = require('./routes/news');
const app = express();

/* Logging setup */
app.use(logger('dev'));
app.use(logger('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}))

/* Middlewares for processing the request */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow_orgin", '*');
    next();
})

/*Routes middleware */
app.use('/news', newsRouter);

module.exports = app;
