const express = require('express');
const path = require('path');
const { getMovieReview, getGenres } = require('../controllers/api');
const router = express.Router();

router.get("/", getMovieReview);
router.get("/genres",getGenres);

module.exports = router;