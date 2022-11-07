const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const nodemon = require('nodemon')

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//problem 1
router.get('/movies', function(req, res){
    const bollywoodmovies=['ddlj','bodyguard','super30','tiger']
    console.log("List of movies:",bollywoodmovies)

})
// problem2

router.get('/movies/:indexNumber',function (req,res){
    let moviesName=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
   let myParams1=req.params.indexNumber
   console.log("The path params in the request are :",myParams1)
   res.send("The movie at the first index is "+ moviesName[myParams1] )
   })

 //problem3   
router.get('/movie/:indexNumber', function(req, res){
    const movies= [{ "id":1,
                     "name":'Rang de basanti'
                    },
                    {"id":2,
                    "name": 'The shining'
                    },
                    {"id":3,
                    "name": "Lord of the rings"
                    },
                    {"id": 4,
                    "name": 'Batman begins'
                    }]

    let requestParams = req.params.indexNumber
    if(requestParams>movies.length)
    console.log("Invalid Id")
    res.send("No movie exists with this id")
 })
 //problem4

 router.get('/films', function(req, res){
    const movies= [{ "id":1,
                     "name":'Rang de basanti'
                    },
                    {"id":2,
                    "name": 'The shining'
                    },
                    {"id":3,
                    "name": "Lord of the rings"
                    },
                    {"id": 4,
                    "name": 'Batman begins'
                    }]
    res.send(movies)
            })


module.exports = router;