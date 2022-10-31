const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
   bookName: {
        type: String,
        required:true
    }, 
    authorName:String,
    category:String,

    year:{
        type:Number,
        default:2021
    },
   
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
