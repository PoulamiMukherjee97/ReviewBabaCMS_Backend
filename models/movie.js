const mongoose = require('./mongoDB');

const Schema = mongoose.Schema;

const Movie = new Schema({
    name: String,
    genre: String,
    lang: String,
    director: String,
    actors: [{type: Object}],
    producer: String,
    runtime: String,
    image: String,
    plot: String,
    release:String,
    review: String,
    gdpts: [{ type: String }],
    bdpts: [{ type: String }],
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
    breaks: String,
    performance: String,
    direction: String,
    ratingPlot: { type: Number, min: 1, max:5},
    ratingActing: { type: Number, min: 1, max:5},
    ratingScreenplay: { type: Number, min: 1, max:5},
    imdbRating: String,
    imdbReview: String,
    imdbLink: String,
    rtRating: String,
    rtReview: String,
    rtLink: String,
});

module.exports = mongoose.model('Movie', Movie);