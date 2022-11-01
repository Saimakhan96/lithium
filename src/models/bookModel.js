const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const bookSchema=new mongoose.Schema ({
    bookName:String,
    author_Id: {
        type:Number,
        required:true
    },
    price:Number,
    rating:Number,
    
},{timestamps:true})

module.exports = mongoose.model('newBook', bookSchema) //users