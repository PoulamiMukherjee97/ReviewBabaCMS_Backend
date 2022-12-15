
const MovieModel = require('../models/movie');

exports.createMovieReview = ((req, res) => {
    const Movie = new MovieModel(req.body);
    Movie.save((err, data) => {
        if (!err) {
            res.send({ message: 'Data added successfully' })
        } else {
            console.log(err);
            res.send({ message: 'Data not added' });
        }
    })
})
exports.getMovieReview = ((req, res) => {
    console.log(req.query);
    if (Object.keys(req.query).length) {
        MovieModel.find(req.query, (err, data) => {
            if (!err) {
                if (data.length) {
                    res.send(data[0]._id)
                } else {
                    res.send({ message: 'Movie not present' })
                }
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

exports.updateMovieReview = ((req, res) => {
    let response = {};
    MovieModel.find({ _id: req.params.id }, (err, data) => {
        if (!err) {
            response = { ...data };
        } else {
            res.send('Id not found');
        }
    })
    console.log(response);
    MovieModel.updateOne({ _id: req.params.id }, { ...req.body }, (err, data) => {
        if (!err) {
            if (data.acknowledged && data.modifiedCount == 1) {
                res.send({ message: "Updated Successfully" });
            } else {
                res.send({ message: "Nothing to Update" })
            }
        } else {
            res.statusCode = 500;
            res.send(err);
        }
    })
});

exports.deletedById = ((req, res) => {
    MovieModel.remove({ _id: req.params.id }, (err, data) => {
        if (!err) {
            if (data.acknowledged && data.deletedCount > 0) {
                res.send({ message: 'Record deleted successfully' });
            }
        } else {
            res.statusCode = 500;
            res.send(err);
        }
    })
});