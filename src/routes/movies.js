const express = require("express");
const router = express.Router();
const _ = require('underscore');

const movies = require('../sample.json');

console.log(movies);
router.get('/api/movies', (req, res) => {
    res.json(movies);
    
});

router.post('/api/movies', (req, res) => {
    const {title, director, year, rating} = req.body;
    
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const new_movie = {...req.body, id};
        console.log(new_movie);
        movies.push(new_movie); 
        res.json(movies);
    }
    else{
        res.json({error:"There was an error."});
    }
});


router.delete('/api/movies/:id', (req, res) => {
    const {id} = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });
    res.json(movies)
});


router.put('/api/movies/:id', (req, res) => {
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    
    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }
    else{
        res.json({error:"There was an error."});
    }
});

module.exports = router;
