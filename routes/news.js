var express = require('express');
const app = require('../app');
var router = express.Router();

const newsController = require("../controllers/news")

/* GET top news of country: http://localhost:3000/news/getTopNews?country=gb&page=2 */
/* page param is optional */
router.get("/getTopNews", newsController.getTopNews);

/* Filter news by keyword: http://localhost:3000/news/getFilteredNews?search=microsoft&page=2*/
/* page param is optional */
router.get("/getFilteredNews", newsController.getFilteredNews)

module.exports = router;
