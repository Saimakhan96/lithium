const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")

let createAuthor=async function(req,res){
let data=req.body
let createAuthor= await AuthorModel.create(data) // it will save the details entered on postman in createData
res.send({msg :createAuthor})
}

const getBooksData= async function (req, res) {
    let allBooks= await authorModel.findOne({authorName:"Chetan Bhagat"})
    const author_Id=author.authorId
    const bookList=await bookModel.find({authorId:author_Id})
    res.send(bookList)
}

let getTheAuthor=async function(req,res){
     const bookDetails=await bookModel.findOneAndUpdate({name:"Two States"},{$set : {price:100}},{new:true})
     const author_Id=bookDetails.authorId
     const author=await AuthorModel.findOne({authorId:author_Id})
     res.send({authorName:author.authorName,price:bookDetails.price})
    }
                
    module.exports.createAuthor=createAuthor
    module.exports.getBooksData=getBooksData
    module.exports.getTheAuthor=getTheAuthor
