//Consts intialization
const BASE_URL = "https://newsapi.org/v2/";
const axios = require("axios");
const {STATUS_CODES} = require('http')

module.exports = {
  getTopNews: async (req, res, next) => {
    const country = req.query.country || null;
    const page = req.query.page || 1;
    const url = BASE_URL + `top-headlines?country=${country}&page=${page}&apiKey=${process.env.API_KEY}`;

    if (country) {
      try {
        let topNewsData = await axios.get(url);
        console.log("Sucessfully retrived the news data");
        res.status(200).json({ news: topNewsData.data });
        next();
      } catch (err) {
        console.log("Error while getting the data");
        console.log(err.response.status, err.response.statusText);
        res.status(500).json({ message: STATUS_CODES["500"], description: err.response.statusText });
        next();
      }
    } else {
      res.status(400).json({ message: STATUS_CODES["400"], description: "Invalid request passed to the server" });
      next();
    }
  },

  getFilteredNews: async (req, res, next) => {
    const search = req.query.search || null;
    const page = req.query.page || 1;
    const url = BASE_URL + `everything?q=${search}&page=${page}&apiKey=${process.env.API_KEY}`;

    if (search) {
      try {
        let topNewsData = await axios.get(url);
        console.log("Sucessfully retrived the news data");
        res.status(200).json({ news: topNewsData.data });
        next();
      } catch (err) {
        console.log("Error while getting the filtered news data");
        console.log(err.response.status, err.response.statusText);
        res.status(500).json({ message: STATUS_CODES["500"], description: err.response.statusText });
        next();
      }
    } else {
      res.status(400).json({ message: STATUS_CODES["400"], description: "Invalid request passed to the server" });
      next();
    }
  }
};