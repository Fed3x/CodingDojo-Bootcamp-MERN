/**
 * Arreglo de Fibonacci
 * Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. 
 * Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. 
 * Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. 
 * Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.
 */

 function fibonacci(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    
    while (n > 2) {
        let last = fibArr.at(-1);
        let prev_last = fibArr.at(-2);
        fibArr.push(last+prev_last)
        n--
        
    }
    return fibArr
}
   
var result = fibonacci(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
