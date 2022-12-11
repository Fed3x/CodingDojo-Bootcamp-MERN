/**
 * Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final, 
 * console.log de como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. 
 * Deberíamos obtener  479001600al final.
 */

 let sum = 1;
 for (let i = 1; i <= 12; i++) {
     sum *= i
 }
 console.log('El resultado es: ' + sum)