function trim(){
let word = "    functionUp"
return word.trim()
}

function toLowerCase(){
    let word = "functionUp"
    return word.toLowerCase()
    }
    
    function toUpperCase(){
        let word = "functionUp"
        return word.toUpperCase()
        }
        
module.exports.trim=trim
module.exports.lowercase=toLowerCase
module.exports.uppercase=toUpperCase