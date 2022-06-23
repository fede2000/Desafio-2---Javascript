let Pizzas = [
    {id: 1,nombre: "muzza",ingredientes: ["salsa de tomate","muzzarella","aceitunas"],precio: 800},
    {id: 2,nombre: "napolitana",ingredientes: ["salsa de tomate","muzzarella","jamon","rodajas de tomate","aceitunas"],precio: 1000},
    {id: 3,nombre: "calabresa",ingredientes: ["salsa de tomate","muzzarella","longaniza"],precio: 1000},
    {id: 4,nombre: "jamon y morron",ingredientes: ["salsa de tomate","muzzarella","jamon","morron","aceitunas"],precio: 900},
    {id: 5,nombre: "4 quesos",ingredientes: ["salsa de tomate","muzzarella","provolone","roquefort","parmesano","aceitunas"],precio: 1200},
    {id: 6,nombre: "fugazzeta",ingredientes: ["salsa de tomate","muzzarella","cebolla","aceitunas"],precio: 500},
]

console.log(Pizzas)

// a) Las pizzas que tengan un id impar.

// funcion para calcular id impares del array de objetos

function impares(array){
    let arrayImpares = [];

    for(let i=0; i<array.length ;i++){
        let id = array[i].id;
        if (id % 2 != 0){
            arrayImpares.push(array[i].nombre)
        }

    }
    return('Las pizzas con ID impares son: ',arrayImpares);
}

let resultado = "";
resultado = impares(Pizzas)
console.log(resultado)


// b) ¿Hay alguna pizza que valga menos de $600?

// funcion para verificar si existe una pizza que valga menos que $600

function menorValor(array){
    let resultado = false;
    let i = 0;
    let mensaje = "";
    while(resultado == false && i < array.length){
        let precioPizza = array[i].precio;
        if(precioPizza < 600){
            resultado = true
            mensaje = "Si, tenemos una pizza de menor valor que $600"
        }
        else{
            mensaje = "No tenemos una pizza de menor valor a $600"
        }
        i += 1;
    }
    return mensaje
}

let pizzaEconomica = "";

pizzaEconomica = menorValor(Pizzas)
console.log(pizzaEconomica)


// c) Los nombres de todos las pizzas.

// funcion para obtener los nombres de todas las pizzas

function nombresPizzas(array){
    let arrayNombres = [];
    let nombrePizza = ""
    for(let i = 0; i < array.length; i++){
        nombrePizza = array[i].nombre;
        arrayNombres.push(nombrePizza);
    }

    return arrayNombres
}


let arrayNombresPizzas = []

arrayNombresPizzas = nombresPizzas(Pizzas);

console.log(arrayNombresPizzas)


// d) Los precios de las pizzas.

// funcion para obtener los precios de las pizzas
function preciosPizzas(array){
    let arrayPrecios = [];
    let precioPizza = 0;
    for(let i = 0; i < array.length; i++){
        precioPizza = array[i].precio;
        arrayPrecios.push(precioPizza);
    }

    return arrayPrecios
}


let arrayPreciosPizzas = [];

arrayPreciosPizzas = preciosPizzas(Pizzas)

console.log(arrayPreciosPizzas)

// e) El nombre de cada pizza con su respectivo precio.

// funcion para mostrar los nombres de las pizzas con su respectivo precio

function nombrePrecio(nombres,precios){
    for(let i = 0;i < nombres.length;i++){
        console.log("Pizza ",nombres[i]," precio: $",precios[i])
    }
}

nombrePrecio(arrayNombresPizzas,arrayPreciosPizzas)