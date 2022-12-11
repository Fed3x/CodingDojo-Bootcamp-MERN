
/**
 * Filtro paso alto
 * Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff./
 */



function highPass(arr, cutoff) {
    var filteredArr = [];
    arr.forEach(element => {
        if(element > cutoff){
            filteredArr.push(element)
        }
    });
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
