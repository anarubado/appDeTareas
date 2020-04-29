// Aplicación de tareas

const tareas = require("./tareas");             // Se accede al objeto tareas

let action = process.argv[2]; 

let indice = process.argv[3];
let titulo = process.argv[3];                   // El título y estado pueden ser ingresados entre comillas con un espacio entremedio.
let estado = process.argv[4];                   // Ej: node aplicacion.js agregarUna "Hacer ejercicios de JS" "Pendiente"




switch(action){

    
    case("listar"):
        console.log("--Lista de tareas--");     // Lista las tareas incorporadas en el archivo JSON
        tareas.listar();
        break;


    case("verUna"):
        tareas.verUna(indice);                  // Ve una de las tareas 
        break;


    case("agregarUna"):
        tareas.agregarUna(titulo);              // Agrega una tarea
        break;


    case("borrarUna"):
        tareas.borrarUna(indice);               // Borra una de las tareas
        break;


    case("modificarEstado"):
        tareas.modificarEstado(indice, estado); // Modifica el estado de una tarea
        break;


    case(undefined):
        console.log("Elija una accion");        // Imprime un mensaje al no pasar argumentos adicionales
        break;


    default:
        console.log("La accion solicitada no existe.");
        break;                                  // Imprime un mensaje al pedir una acción inexistente

}