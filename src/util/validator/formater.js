let string = "  This sentence is having white spaces"  ;

function trimstring(){
return string.trim()
}

function lowerstring(){
    return string.toLowerCase()
}

function upperstring(){
    return string.toUpperCase()
}
const array1 = [[22,32,42] [52,32,62] [33,44,52] [45,55,66] [46,32,56]];
const newArray = _.union(...array1);
console.log(newArray);

const arr=[
    ['horror', 'The shinning']
    ['drama', 'Titanic']
    ['thriller', 'shutter Island']
    ['fantasy', 'Pans Labyrinth']
];
const ObjPairs = _.fromPairs(arr);
console.log(Obj.Pairs);


 module.exports = {trimstring,lowerstring,upperstring};
 module.exports = mewArray;
 module.exports = ObjPairs;