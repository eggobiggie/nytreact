const axios = require("axios");
const mongoose = require("mongoose");
const router = require("express").Router();
const db = require('../models');
const articleController = require("../controllers/articleController");

router.get("/search/:topic/:startYear/:endYear", (req, res) => {

  //Drop collection so it can be refreshed per search
  mongoose.connection.db.dropCollection("articles");

  mongoose.connection.db.createCollection("articles");
  
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
      
      //Save information to the database
      db.Article.create(articleArray).then(function (dbArticle) {
      }).catch(function (err) {
        console.log("THE ERROR IS: " + err);
        return res.json(err);
      });
      res.json(articleArray);
    })
    .catch(err => res.status(422).json(err));
});

//Fetch articles from database
router.get("/fetchArticles", (req, res) => {
  db.Article.find({}).then(function(dbArticle) {
    res.json(dbArticle);
  })
  .catch(function (err) {
    res.json(err);
  });
});

//Save article to collection per id
router.get("/savedArticles/:id", (req, res) => {
  //grab article id on click of save button
  db.Article.findById(req.params.id)
    .then(savedArticle => {
      //create new article object using saved article schema
      let articleToSave = new db.SavedArticle({ 
        _id: savedArticle.id,
        title: savedArticle.title,
        pub_date: savedArticle.pub_date,
        url: savedArticle.url
      })
      //Save new article object to saved collection
      articleToSave.save(err => {
        if (err) return res.status(569).send(err);
        return res.send(savedArticle);
      });
    }).catch(function (err) {
      res.json(err);
    });
  });

//fetch saved articles from db for display
  router.get("/fetchSavedArticles", (req, res) => {
    db.SavedArticle.find({})
      .then(function (dbSavedArticle) {
        res.json(dbSavedArticle);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //delete saved article
  router.delete("/deleteArticle/:id", (req, res) => {
    console.log("delete route");
    db.SavedArticle.findById(req.params.id)
    .then(deleteArticle => deleteArticle.remove())
    .then(deleteArticle => res.json(deleteArticle))
    .catch(err => res.json(err))
  });


module.exports = router;

