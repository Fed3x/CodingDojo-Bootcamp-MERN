/**
 * Arreglo invertido
 * Escribe una función que invierta los valores de un arreglo y los devuelva.
 */

function reverse(arr) {
    let reverse = []
    for (let i = arr.length - 1; i >= 0 ; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
