const { count } = require("console")
const { privateDecrypt } = require("crypto")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const allbookList= async function (req, res) {
    let getBooks=await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send(getBooks)
}
const getBooks=async function(req,res){
    let year=req.body
    let saveThatBooks= await BookModel.find(year)
    res.send(saveThatBooks)
}
const getThatBook=async function(req,res){
    let queryObj=req.body
    let saveHere= await BookModel.find(queryObj)
    res.send(saveHere)
}
const getBookByPrice= async function(req,res){
    let getByPrice= await BookModel.find({$in :["Rs 100INR","Rs 200INR","500INR"]} )
    res.send(getByPrice)
}   
const getRandomBooks=async function(req,res){
  
    let getAllThatBooks= await BookModel.find({ $or:[{stockAvailable:true},{totalPages:500}]})
    res.send(getAllThatBooks)
}
        

module.exports.createBook= createBook
module.exports.allbookList=allbookList
module.exports.getBooks=getBooks
module.exports.getThatBook=getThatBook
module.exports.getBookByPrice=getBookByPrice
module.exports.getRandomBooks=getRandomBooks  