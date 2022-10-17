let mydate = new Date();
function printDate(){
    console.log("Today's date is "+ mydate +"");
}

function printMonth(){
    console.log(""+ mydate.getMonth() +" is the running month");
    }


function getBatchInfo (){
    console.log("Lithium, week4 day 4, the topic for today is node.js modeule system");
}
module.exports = {printDate,printMonth,getBatchInfo};