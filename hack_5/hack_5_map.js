/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
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

}).reverse();

console.log(result);

//export result
module.exports = result;