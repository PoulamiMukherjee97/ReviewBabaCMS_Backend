const MovieModel = require('../models/movie');
const genres = require('../public/assets/Genre.json');

exports.getMovieReview = ((req, res) => {
    console.log(req.query);
    if (Object.keys(req.query).length) {
        MovieModel.find(req.query, (err, data) => {
            if (!err) {
                res.send(data);
            } else {
                res.send('Id not found');
            }
        })
    } else {
        MovieModel.find({}, (err, data) => {
            if (!err) {
                res.send(data)
            } else {
                res.send('Error Occurred');
            }
        });
    }
});
exports.getGenres = (req,res) => {
    res.send(genres);
}