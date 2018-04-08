import axios from "axios";

export default {
    //grabs all articles
    searchArticles: function (topic, startYear, endYear) {
        // return axios.get("/api/search", { params: { "topic":topic, "startYear":startYear, "endYear":endYear } });
        let articles = axios.get("/api/search/"+ topic + "/" + startYear + "/" + endYear);
        console.log(articles);
        return articles;
    },
    fetchArticles: function(req, res) {
        return axios.get("/api/fetchArticles");
    },
    //saves articles to db
    saveArticles: function (id) {
        console.log("saving")
        return axios.get("/api/savedArticles/" + id);
    },
    fetchSavedArticles: function () {
        console.log("fetchsavedapi")
        return axios.get("/api/fetchSavedArticles/");
    },
    // //delete article via given id
    deleteArticles: function(id) {
        return axios.delete("/api/articles", id)
    },
    //Save note per id
    saveNote: function(id) {
        return axios.post("/api/notes" + id);
    },
    //Delete note per id
    deleteNote: function(id) {
        return axios.delete("/api/notes/" + id);
    }
};