const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
  axios
    .get("http://www.newyorktimes.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
    console.log(results);
});

module.exports = router;