/**
 * Crea una functionllamada pizzaOven. 
 * Debemos sentirnos libres de personalizar la información que registramos para nuestra pizza, pero asegurémonos de incluir lo siguiente:  
 *  tipoCorteza, tipoSalsa, quesoss,y salsas.
 */


function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    const pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas,
    };
    return pizza;
}
    
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
var pizza2 = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"] );
var pizza3 = pizzaOven("masa gruesa" , "mexicana" , ["katupyri", "mozzarella"], ["chorizos", "aceitunas"] );
var pizza4 = pizzaOven("masa fina" , "roja dragonica" , ["ricota", "permesano"], ["aji picado", "pimienta", "cebollas"] );
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);


