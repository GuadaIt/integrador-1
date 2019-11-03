const nombreDeLaTienda = "Dosis"; // Tomate una dosis de rosé, una sobredosis de rosé
let producto1 = "Champagne Extra Brut";
let precioProducto1 = 500; 
let producto2 = "Fernet Branca 1L";
let precioProducto2 = 450;
let códigoDeDescuento = "tomateUnaDosis";
let respuestaProducto2;
let unidadesProducto1 = 0;
let unidadesProducto2 = 0;
let modoDePago;
let cantidadDeCuotas = 0; 
let totalEnCuotas = 0;
const respuestaAfirmativa = "Si";
const respuestaNegativa = "No";

let nombreDeCliente = prompt(`Bienvenide a Dosis, tienda de bebidas.
Dime tu nombre y te diré que bebida eres`);
alert(`¡Hola, ${nombreDeCliente}! Tenemos los siguientes productos en promoción para vos:
- ${producto1}
- ${producto2}`);

let respuestaProducto1 = prompt(`¿Querés comprar ${producto1}?`);

respuestaProducto1 == respuestaAfirmativa && (unidadesProducto1 = Number(prompt(`¿Cuántas unidades querés comprar?`)));
respuestaProducto2 = prompt(`¿Querés comprar ${producto2}`);
respuestaProducto2 == respuestaAfirmativa && (unidadesProducto2 = Number(prompt(`¿Cuántas unidades querés comprar?`)));

let subtotal1 = precioProducto1 * unidadesProducto1;
let subtotal2 = precioProducto2 * unidadesProducto2;
let total = subtotal1 + subtotal2;
let totalSinCuotas;
totalEnCuotas = total / cantidadDeCuotas;

alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
 
  Total: $${total}
`) 

modoDePago = prompt("¿Querés abonar con tarjeta de crédito?");
modoDePago == respuestaAfirmativa && (cantidadDeCuotas = Number(prompt("¿En cuántas cuotas deseas abonar?"))) && alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
 
  Total: $${total}
  A abonar en ${cantidadDeCuotas} cuotas de $${totalEnCuotas} 
`);

(modoDePago == respuestaNegativa || modoDePago == "") && (totalSinCuotas = alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
 
  Total: $${total}
`));

totalEnCuotas = total / cantidadDeCuotas;
let valorDescuento = (10 * total) / 100;
let totalFinal = total - valorDescuento;

let respuestaCodigo = prompt(`¿Tenes un código de descuento?`);
let ingresaCodigo;

respuestaCodigo != respuestaAfirmativa && alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
  Total: $${total}

  A abonar en ${cantidadDeCuotas} cuotas de $${totalEnCuotas} 
`)

respuestaCodigo == respuestaAfirmativa && (ingresaCodigo = prompt(`Ingresa el código de descuento`));

ingresaCodigo == códigoDeDescuento && alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
  Total: $${total}

  Descuento: $${valorDescuento} 
 
  Total final: $${totalFinal} 
  A abonar en ${cantidadDeCuotas} cuotas de $${totalEnCuotas} 
`)

ingresaCodigo !== códigoDeDescuento && (ingresaCodigo = prompt("Por favor, ingresa un código válido"));

ingresaCodigo == códigoDeDescuento && alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
  Total: $${total}

  Descuento: $${valorDescuento} 
 
  Total final: $${totalFinal} 
  A abonar en ${cantidadDeCuotas} cuotas de $${totalEnCuotas} 
`)

//faltaría solucionar que aparezca bien el detalle de la compra si ambos el descuento y las cuotas son validas, o si solo una de ellas lo es

alert(`¡Gracias por tomarte una Dosis con nosotros!`)