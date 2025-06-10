/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

arr.forEach(function(item){
    if(item[0] == "b"){
        return result++;
    } else{
        return result;
    }
});

console.log(result)

//export result
module.exports = result;