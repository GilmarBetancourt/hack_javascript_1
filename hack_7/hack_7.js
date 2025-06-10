/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

result = arr.map(function(item){
    return item = item[0].toUpperCase() + item.substring(1);
})

console.log(result);

//export result
module.exports = result;