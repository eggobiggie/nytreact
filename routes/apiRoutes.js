const axios = require("axios");
const mongoose = require("mongoose");
const router = require("express").Router();
const db = require('../models');

router.get("/search/:topic/:startYear/:endYear", (req, res) => {
  
  const apiKey = "d4adf4a8f6034776a1f3fc735080ffc6";
    
    /*
     * The format of the URL is
     * https://api.nytimes.com/svc/search/v2/articlesearch.json
     * ?api-key=d4adf4a8f6034776a1f3fc735080ffc6
     * &q=%22steam-clams%22
     * &begin_date=19910101
     * &end_date=20181231
     */ 
    let searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
    apiKey + "&q=" + req.params.topic + "&begin_date=" + req.params.startYear + 
    "0101&end_date=" + req.params.endYear + "1231";
    axios.get(searchUrl)
    .then(function(response) {

      //create for loop to go through the responses with this variable so we can pull the details we need
      let articleArray = response.data.response.docs;
      
    //   db.Article.create(response.data).then(function (dbArticle) {
    //     console.log(dbArticle);
    //   }).catch(function (err) {
    //     console.log("THE ERROR IS: " + err);
    //     return res.json(err);
    //   });
      res.json(response.data);
    })

    .catch(err => res.status(422).json(err));
    
    
});


router.get("/fetchArticles", (req, res) => {
  // res.send("Test");
  db.Article.find({}).then(function (dbArticle) {
    res.json(dbArticle);
  }).catch(function (err) {
    res.json(err);
  });
});

module.exports = router;



// router.get("/articles", (req, res) => {
// module.exports = (req, res) => {
//   const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

//   axios
//     .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
//       authKey + "&q=", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));

  // let results = {
  //   title: "",
  //   pub_date: "",
  //   url: ""
  // };

  // mongoose.connection.db.dropCollection("articles");

  // const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  // axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  //   authKey + "&q=",
  //   { params: req.query })
  //   .then(({ data: { results } }) => 
  //   {
  //     for (let i = 0; i < data.length; i++) {
  //       results = {
  //         title: data.results[i].headline.main,
  //         pub_date: data.results[i].pub_date,
  //         url: data.results[i].web_url
  //       }
  //     }
  //     res.json(results)
  //   })
  //   .catch(err => res.status(422).json(err));
  // console.log(res);

  // db.Article.create(results).then(function (dbArticle) {
  //   console.log(dbArticle);
  // }).catch(function (err) {
  //   console.log("THE ERROR IS: " + err);
  //   return res.json(err);
  // });
// });
// }
