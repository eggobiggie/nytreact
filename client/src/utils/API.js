import axios from "axios";

export default {
    //grabs all articles
    searchArticles: function (topic, startYear, endYear) {
        let articles = axios.get("/api/search/" + topic + "/" + startYear + "/" + endYear);
        console.log(articles);
        return articles;
    },
    fetchArticles: function (req, res) {
        return axios.get("/api/fetchArticles");
    },
    //saves articles to db
    saveArticles: function (id) {
        return axios.get("/api/savedArticles/" + id);
    },
    //grab saved articles from saved collection
    fetchSavedArticles: function () {
        return axios.get("/api/fetchSavedArticles/");
    },
    //delete article via given id
    deleteArticles: function (id) {
        console.log("delete api")
        return axios.delete("/api/deleteArticle/" + id)
    },
    //Save note per id
    saveNote: function (id) {
        return axios.post("/api/notes" + id);
    },
    //Delete note per id
    deleteNote: function (id) {
        return axios.delete("/api/notes/" + id);
    }
};