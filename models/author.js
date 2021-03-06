const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and model

const BookSchema = new Schema({
    title: String,
    numberOfPage: Number
})

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema],
})

const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;