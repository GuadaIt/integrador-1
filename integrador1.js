const nombreDeLaTienda = "Dosis"; // Tomate una dosis de rosé, una sobredosis de rosé
// amé el nombre

let producto1 = "Champagne Extra Brut";
let precioProducto1 = 500; 
let producto2 = "Fernet Branca 1L";
let precioProducto2 = 450;
let códigoDeDescuento = "tomateUnaDosis";
// amé el  código de descuento
const respuestaAfirmativa = "Si";
const respuestaNegativa = "No";

// amé los nombres de variables. Claros y descriptivos. 

let nombreDeCliente = prompt(`Bienvenide a Dosis, tienda de bebidas.
Dime tu nombre y te diré que bebida eres`);
alert(`¡Hola, ${nombreDeCliente}! Tenemos los siguientes productos en promoción para vos:
- ${producto1}
- ${producto2}`);

let respuestaProducto1 = prompt(`¿Querés comprar ${producto1}?`);
let unidadesProducto1
respuestaProducto1 == respuestaAfirmativa && (unidadesProducto1 = prompt(`¿Cuántas unidades querés comprar?`));

let respuestaProducto2
// Este prompt de abajo sólo aparece si antes respondimos que No. 
// Como después usamos a producto2, y nunca apareció, nos figura como undefined. 
// No es necesario validar si la respuesta a producto1 fue negativa, queremos que ese prompt aparezca
// aunque el usuario haya respondido que no. 
// Modifiquemos la linea para que quede asi directamente
// respuestaProducto2 = prompt(`¿Querés comprar ${producto2}`)
respuestaProducto1 == respuestaNegativa && (respuestaProducto2 = prompt(`¿Querés comprar ${producto2}`));
let unidadesProducto2
respuestaProducto2 == respuestaAfirmativa && (unidadesProducto2 = prompt(`¿Cuántas unidades querés comprar?`));

// Si el usuario nos dice que "no" en cualquiera de los casos, nunca definimos cuánto vale unidadesProducto1 o
// unidadesProducto2. 
// podriamos resolverlo declarándolas como 0. Así, si el usuario dice que no quiere comprar ese producto, hacemos la cuenta por 0
// y no aparece ese undefined. 
alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: ${precioProducto1} * ${unidadesProducto1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${precioProducto2} * ${unidadesProducto2}
 
  Total: ${precioProducto1} * ${unidadesProducto1} + ${precioProducto2} * ${unidadesProducto2}
`)

// en la linea de arriba, para mostrarle el total al usuario como un numero, podriamos antes definirlo como variable
// El codigo quedaria asi:

// let total =  (precioProducto1 * unidadesProducto1) + (precioProducto2 * unidadesProducto2)

// alert(`El detalle de tu compra es:
// - ${producto1}: ${unidadesProducto1} x $${precioProducto1}
//   Subtotal: ${precioProducto1} * ${unidadesProducto1}
// - ${producto2}: ${unidadesProducto2} x $${precioProducto2}
//   Subtotal: $${precioProducto2} * ${unidadesProducto2}
//  
//   Total: ${total}
// `)



/*1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
   2. Mostrarle los productos en promoción (2 productos)
   3. Preguntarle si quiere comprar el producto 1.
      a. Si responde "SI" preguntar cuántas unidades va a llevar
   4. Preguntarle si quiere comprar el producto 2.
      a. Si responde "SI" preguntar cuántas unidades va a llevar
   5. Mostrar el detalle de la compra con:
      - subtotales de cada producto (precio x cantidad) 
      - total (suma de subtotales)
   6. Preguntar si desea abonar con tarjeta de crédito
      a. Si responde "SI" preguntar en cuántas cuotas desea abonar  
   7. Mostrar el detalle de la compra con:
      - subtotales de cada producto (precio x cantidad) 
      - total (suma de subtotales)
      - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
   8. Preguntar si tiene un código de descuento
      - si la respuesta es "SÍ", pedir que ingrese el código
      - mostrar si el código ingresado es correcto o incorrecto
   9. Mostrar el detalle de la compra con:
      - subtotales de cada producto (precio x cantidad) 
      - total (suma de subtotales)
      - si tiene código y lo ingresó bien, mostrar el descuento y el total final
      - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
   10. Mostrar un saludo de despedida */
