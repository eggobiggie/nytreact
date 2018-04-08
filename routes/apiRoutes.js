const axios = require("axios");
const mongoose = require("mongoose");
const router = require("express").Router();
const db = require('../models');
const articleController = require("../controllers/articleController");

router.get("/search/:topic/:startYear/:endYear", (req, res) => {

  //Drop collection so it can be refreshed per search
  mongoose.connection.db.dropCollection("articles");

  // mongoose.connection.db.createCollection("articles");
  
  const apiKey = "d4adf4a8f6034776a1f3fc735080ffc6";
    
    let searchUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
    apiKey + "&q=" + req.params.topic + "&begin_date=" + req.params.startYear + 
    "0101&end_date=" + req.params.endYear + "1231";
    axios.get(searchUrl)
    .then(function(response) {

      //Save response in variable so it's shorter
      let articleResponse = response.data.response.docs;

      //create empty array to fill with objects of the grabbed information
      let articleArray = [];

      //loop through data from the nyt
      for (let i = 0; i < articleResponse.length; i++) {
      //Push information into the array as objects
       articleArray.push({
          title: articleResponse[i].headline.main,
          pub_date: articleResponse[i].pub_date,
          url: articleResponse[i].web_url
       });
      }
      // console.log(articleArray);
      
      //Save information to the database
      db.Article.create(articleArray).then(function (dbArticle) {
        // console.log(dbArticle);
      }).catch(function (err) {
        console.log("THE ERROR IS: " + err);
        return res.json(err);
      });
      res.json(articleArray);
    })
    .catch(err => res.status(422).json(err));
});

router.get("/fetchArticles", (req, res) => {
  // let fetch = articleController.findAll;
  // console.log("fetch isn't gonna happen ");
  // console.log(articleController.findAll());
  // res.json(fetch);
  db.Article.find({}).then(function(dbArticle) {
    res.json(dbArticle);
  })
  .catch(function (err) {
    res.json(err);
  });
});

router.get("/savedArticles/:id", (req, res) => {
  console.log("apiroutes")
  db.Article.findById(req.params.id)
    .then(savedArticle => {
      console.log(savedArticle)
      // db.SavedArticle.save(savedArticle);
      // res.json(savedArticle);
      console.log("not actually saving article, just the one below:")
      let articleToSave = new db.SavedArticle({ _id: savedArticle.id,
        title: savedArticle.title,
        pub_date: savedArticle.pub_date,
        url: savedArticle.url
      })
      console.log(articleToSave);
      articleToSave.save(err => {
        if (err) return res.status(569).send(err);
        console.log("fired articleToSave.save as expected")
        return res.send(savedArticle);
      });
    }).catch(function (err) {
      res.json(err);
    });
  

  });
  // findById({}).then(function(savedArticle) {
  //   db.SavedArticles.save();
  //   res.json(savedArticle);
  // }).catch(function (err) {
  //   res.json(err);
  // });
// });

module.exports = router;

