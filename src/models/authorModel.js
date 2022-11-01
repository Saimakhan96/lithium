const mongoose = require('mongoose');

const authorSchema=new mongoose.Schema ({
    authorName:String,
    author_Id: {
        type:Number,
        required:true
    },
    age:Number,
    address:String,

},{timestamps:true})

module.exports= mongoose.model('newAuthor',authorSchema)
