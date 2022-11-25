const mongoose = require('./mongoDB');

const Schema = mongoose.Schema;

const Movie = new Schema({
    name: String,
    genre: String,
    lang: String,
    director: String,
    actors: String,
    producer: String,
    reviewBy: String,
    image: String,
    plot: String,
    release:String,
    reviews:Number,
    review: String,
    gdpts: [{ type: String }],
    bdpts: [{ type: String }],
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
    breaks: String,
    performance: String,
    direction: String,
    rating: { type: Number, min: 1, max:5},
    imdbrating: { type: Number, min: 1, max:5},
});

module.exports = mongoose.model('Movie', Movie);