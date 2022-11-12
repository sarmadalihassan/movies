const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require("body-parser");
const {Movie} = require('./models/Movies.js');

// console.log(Movie.Movie);

app.use(bodyParser.json());

app.post('/api/movie', async (req, res) => {
    // console.log(Movie); 
    let movie = new Movie(req.body); 

    await movie.save(); 

    return res.status(200).send(movie); 
}); 


//this route gets all the movies 
app.get('/api/movie', async (req, res) => {
    let movies = await Movie.find();

    return res.status(200).send(movies); 
}); 

app.put('/api/movie/:id', async (req, res) => {
    let movie = await Movie.findById(req.params.id)

    movie.title = req.body.title;

    await movie.save(); 

    return res.status(200).send(movie); 
}); 

app.delete('/api/movie/:id', async (req, res) => {
    let movie = await Movie.deleteOne({"_id": req.params.id}); 

    console.log(movie); 

    return res.status(200).send(movie); 
}); 

app.listen(3000, () => { 
    console.log('listening on: http://localhost:3000'); 
});

mongoose.connect('mongodb://localhost:27017', () => {
    console.log('connected to database'); 
});
