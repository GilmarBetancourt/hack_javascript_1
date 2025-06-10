/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let fullResult = [];

for(i=1; i<5; i++){
    fullResult.push(i);
}

result = fullResult.map(function(numero, indice){
    if(indice!=0){
       return numero=numero+indice;
    } else{
        return numero;
    }

})

console.log(result);

//export result
module.exports = result;