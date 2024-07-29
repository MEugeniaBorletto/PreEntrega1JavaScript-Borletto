//BIENVENIDA AL USUARIO
alert(
  "Bienvenidx a MeowShop. En nuestra tienda online te ofrecemos los mejores artículos para tus michis."
);
let ingreseSuUsuario = prompt("Ingrese su nombre de usuario");
console.log("Usted ingreso como: " + ingreseSuUsuario);

//DECLARO LAS VARIABLES Y LES ASIGNO UN PRECIO
const comedero = 10000;
const rascador = 20000;
const pelota = 5000;
const piedraSanitaria = 8500;
const alimento = 35000;
const ratita = 4500;
let articulo = 0;
let unidadesComedero = 0;
let unidadesRascador = 0;
let unidadesPelota = 0;
let unidadesPiedraSanitaria = 0;
let unidadesAlimento = 0;
let unidadesRatita = 0;

while (articulo !== 7) {
  articulo = parseInt(
    prompt(
      `Ingrese el artículo deseado.\n 1- Comedero ${comedero} \n 2- Rascador ${rascador} \n 3- Pelota ${pelota} \n 4- Piedras Sanitarias ${piedraSanitaria} \n 5- Alimento ${alimento} \n 6- Ratita \n 7-Finalizar compra`
    )
  );
  switch (articulo) {
    case 1:
      unidadesComedero = parseInt(
        prompt("Ingrese el número de artículos que desea adquirir:")
      );
      break;
    case 2:
      unidadesRascador = parseInt(
        prompt("Ingrese el número de artículos que desea adquirir:")
      );
      break;
    case 3:
      unidadesPelota = parseInt(
        prompt("Ingrese el número de artículos que desea adquirir:")
      );
      break;
    case 4:
      unidadesPiedraSanitaria = parseInt(
        prompt("Ingrese el número de artículos que desea adquirir:")
      );
      break;
    case 5:
      unidadesAlimento = parseInt(
        prompt("Ingrese el número de artículos que desea adquirir:")
      );
      break;
    case 6:
      unidadesRatita = parseInt(
        prompt("Ingrese el número de artículos que desea adquirir:")
      );
      break;
    case 7:
      break;

    default:
      alert("Ingrese un número válido.");
      break;
  }
}

let costoFinal =
  unidadesComedero * comedero +
  unidadesRascador * rascador +
  unidadesPelota * pelota +
  unidadesPiedraSanitaria * piedraSanitaria +
  unidadesAlimento * alimento +
  unidadesRatita * ratita;
alert("Importe: $" + costoFinal + " sin IVA incluído.");

alert("A continuación se le aplicará un 21% de IVA al importe.");

//FUNCIÓN
const IVA = 0.21;

let costoFinalIVA = (costoFinal, IVA) => {
  return costoFinal + costoFinal * IVA;
};
alert(
  "El importe final con IVA incluido es $" + costoFinalIVA(costoFinal, IVA)
);
