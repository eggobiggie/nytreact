const axios = require("axios");
const router = require("express").Router();

const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

router.get("/articles", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q="
    , { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
    console.log(results);
});

module.exports = router;