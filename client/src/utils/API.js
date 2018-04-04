import axios from "axios";

export default {
    //grabs all articles
    getArticles: function() {
        return axios.get("/api/articles");
    }
    // //saves articles to db
    // saveArticles: function(articleData) {
    //     return axios.post("/api/articles" + articleData);
    // },
    // //delete article via given id
    // deleteArticles: function(id) {
    //     return axios.delete("/api/articles", id)
    // }

};