/**
 * 
 * Mejor que el promedio
 * Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.
 */



function betterThanAverage(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element
    });
    let prom = sum / arr.length;
    var count = 0
    arr.forEach(element => {
        if(element > prom){
            count++
        }
    });
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
