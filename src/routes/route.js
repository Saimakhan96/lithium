const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false  
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

  router.post("/persons",function(req,res){
    const votingAge=req.query.votingAge
    const updatedPersons=[]
    for(let i=0;i<persons.length;i++){
        if(persons[i].age>=votingAge){
            persons[i].votingStatus=true
            updatedPersons.push(persons[i])
        }
    }
    res.send(updatedPersons)
  })

 
module.exports = router;