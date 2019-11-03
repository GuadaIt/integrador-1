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
let totalEnCuotas = "";
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

(modoDePago == respuestaNegativa || modoDePago == "") && alert(`El detalle de tu compra es:
- ${producto1}: ${unidadesProducto1} x $${precioProducto1}
  Subtotal: $${subtotal1}
- ${producto2}: ${unidadesProducto2} x $${precioProducto2}
  Subtotal: $${subtotal2}
 
  Total: $${total}
`)

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

ingresaCodigo !== códigoDeDescuento && alert("Por favor, ingresa un código válido");

//faltaria que aparezca el prompt despues del alerta "por favor ingresa un codigo valido"

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

alert(`¡Gracias por tomarte una Dosis con nosotros!`)