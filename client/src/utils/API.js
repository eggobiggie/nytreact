import axios from "axios";

export default {
    //grabs all articles
    searchArticles: function (topic, startYear, endYear) {
        // return axios.get("/api/search", { params: { "topic":topic, "startYear":startYear, "endYear":endYear } });
        let articles = axios.get("/api/search/"+ topic + "/" + startYear + "/" + endYear);
        console.log(articles);
        return articles;
    },
    //saves articles to db
    saveArticles: function (articleData) {
        return axios.post("/api/articles" + articleData);
    },
    // //delete article via given id
    deleteArticles: function(id) {
        return axios.delete("/api/articles", id)
    },
    //Search articles per NYT API
    // searchArticles: function(topic, startYear, endYear) {
    //     const apiKey = "d4adf4a8f6034776a1f3fc735080ffc6";
    //     return axios.get(
    //         'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
    //         apiKey + "&q=" + topic + "&begin_date=" + startYear + 
    //         "0101&end_date=" + endYear + "1231"
    //       );
    // },
    //Save note per id
    saveNote: function(id) {
        return axios.post("/api/notes" + id);
    },
    //Delete note per id
    deleteNote: function(id) {
        return axios.delete("/api/notes/" + id);
    }
};