const BookModel= require("../models/bookModel")


let createBooks=async function(req,res){
    let data=req.body
    let createThatBook=await BookModel.create(data)
    res.send({msg :createThatBook})
}

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find()
//     res.send({msg: allBooks})
// }

module.exports.createBooks= createBooks
// module.exports.getBooksData= getBooksData