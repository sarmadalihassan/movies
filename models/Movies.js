const mongoose = require('mongoose'); 

let movieSchema = new mongoose.Schema({
    title: {
        required: true, 
        type: String
    }, 
    boxOfficeSales: {
        type: Number
    }, 
    director: {
        type: String
    }
});


module.exports = { 
    Movie: mongoose.model('Movie', movieSchema)
}