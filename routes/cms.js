const express = require('express');
const path = require('path');
const { createMovieReview, getMovieReview, updateMovieReview, deletedById } = require('../controllers/cms');
const router = express.Router();


router.post('/', createMovieReview);
router.get('/', getMovieReview);
router.put('/:id', updateMovieReview);
router.delete('/:id', deletedById);

router.get('/view/getMovieId', (req,res) =>{
    res.sendFile(`${path.resolve('./views/getMovieId.html')}`)
});

router.get('/view/updateMovieReview', (req,res) =>{
    res.sendFile(`${path.resolve('./views/updateMovieReview.html')}`)
});

router.get('/view/deleteMovieReview', (req,res) =>{
    res.sendFile(`${path.resolve('./views/deleteMovieReview.html')}`)
});


module.exports = router;

