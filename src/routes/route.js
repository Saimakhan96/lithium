const express = require('express');
const router = express.Router();///test-you
const intro = require('../logger')
const {currentDate, currentMonth, batch} = require ('../util/helper')
const abc = require ('../validator/formatter')
const underscore = require('underscore')
const lodash = require('lodash')



router.get('/test-me', function (req, res) {
console.log("Calling intro function ",intro.myFunction())    
console.log("Calling currentDate function ",currentDate());
console.log("Calling Month function ",currentMonth())
console.log("Calling BatchInfo function ",batch())
console.log("Calling trim function ",abc.trim())
console.log("Calling lowerString function ",abc.lowercase())
console.log("Calling upperString function ",abc.uppercase())

const array= ['Jan','Feb','Mar','Apr','May','June', 'Jul','Aug','Sept','Oct','Nov','Dec']
const result=lodash.chunk(array,4)
console.log("splitted array :", result)

const array1=[1,3,5,7,9]
const answer=lodash.tail(array1)
console.log("tailed array is:",answer)

const array2=lodash.union([12,12,56,18], [1,3,9,9], [1,47,1,9] ,[10,3,3,91])
console.log("union array:", array2)

let pairExample=lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter"]])
console.log("The example of fromPairs function is :",pairExample)

//     console.log("The value of the constant is ",xyz.myUrl)
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//     console.log("The result of underscores examples api is : ", result)
    
res.send('My first ever api!')
});
        
module.exports = router