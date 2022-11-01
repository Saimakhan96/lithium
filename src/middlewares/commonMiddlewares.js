const { request } = require('express');
var moment = require('moment');
const mid1= function ( req, res, next) {
    
    let timestamps=moment().format('YYYY-MM-DD: hh:mm:ss');
    console.log(timestamps)
    let ip=req.ip
    console.log(ip)
    console.log( req.originalUrl);
    // console.log(req.route.path)
    
    next()
}

module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
