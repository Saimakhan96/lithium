const url = "https://www.google.com"

function printDate(){
    let today=new Date()
  return today.getDate()
}

function printMonth(){
    let today=new Date()
  return today.getMonth()
}

function getBatchInfo(){
    console.log("Lithium week 6 day 5 the topic being taught is  node JS module system")
}
module.exports.myUrl = url
module.exports.currentDate=printDate
module.exports.currentMonth=printMonth
module.exports.batch=getBatchInfo