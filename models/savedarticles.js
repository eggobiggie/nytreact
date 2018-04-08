const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SavedArticleSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    title: {
        type: String,
        required: true
    },
    pub_date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note",
        required: false
    }
});

const SavedArticle = mongoose.model("SavedArticle", SavedArticleSchema, "savedArticles");

module.exports = SavedArticle;