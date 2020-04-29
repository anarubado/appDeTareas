const fs = require("fs");                                           // Se incluye el módulo File System que leerá y re-escribirá el archivo JSON

let tareas = {
    
    
    leerJson: function(){
        if (fs.existsSync("./data.json")){
            let ListaDeTareas = fs.readFileSync("./data.json", "utf8"); 
            ListaDeTareas = JSON.parse(ListaDeTareas);              // Lee el archivo JSON y lo convierte en un objeto literal
            return ListaDeTareas;
        }else{
            return [];
        };
    },


    escribirJson: function(listaDeTareas){
        let datosJson = JSON.stringify(listaDeTareas, null, " ");   // Convierte la lista de tareas en string para poder re-escribir el archivo JSON,
        fs.writeFileSync("./data.json", datosJson);                 // luego de agregar cambios
    },


    indiceEstaDefinido: function(indice){
        return indice !== undefined;                                 
    },


    indiceEsCorrecto: function(indice){
        let listaDeTareas = this.leerJson();                     

        if (!this.indiceEstaDefinido(indice)){
            console.log("Elija una opcion");
            return false;
        };
        
        let tareaExiste = indice >= 0 && indice < listaDeTareas.length;
        if (!tareaExiste){
            console.log("La tarea no existe. Por favor, elija otra tarea");
            return false;
        };
        
        return true;
    },


    stringEstaDefinido: function(str){
        return str !== undefined;
    },


    stringEsCorrecto: function(str){
        if (!this.stringEstaDefinido(str)){
            console.log("Por favor, ingrese una cadena de texto");
            return false;
        };
        return true;
    },


    listar: function(){
        let listaDeTareas = this.leerJson();                        
        listaDeTareas.forEach(function(elemento, indice){
            console.log(indice + ") " + elemento.titulo + " | " + elemento.estado);
        });
    },


    verUna: function(indice){
        let listaDeTareas = this.leerJson();
        if (this.indiceEsCorrecto(indice)){
            console.log(listaDeTareas[indice].titulo + " | " + listaDeTareas[indice].estado);
        };
    },


    agregarUna: function(tituloNuevo){
        let listaDeTareas = this.leerJson();               
        if (this.stringEsCorrecto(tituloNuevo)){
            let nuevaTarea = {
                titulo: tituloNuevo,
                estado: "Pendiente",
            };
            listaDeTareas.push(nuevaTarea);                          // Se agrega la nuevaTarea (un objeto literal) a la lista de tareas
            this.escribirJson(listaDeTareas);
            console.log("Tarea agregada!");
        };      
    },


    modificarEstado: function(indice, estadoNuevo){
        let listaDeTareas = this.leerJson();                    
        if (this.indiceEsCorrecto(indice) && (this.stringEsCorrecto(estadoNuevo))){
            listaDeTareas[indice].estado = estadoNuevo;             // Re-define el estado de una tarea específica    
            this.escribirJson(listaDeTareas);
            console.log("Estado actualizado!");
        };
    },


    borrarUna: function(indice){
        let listaDeTareas = this.leerJson();
        if (this.indiceEsCorrecto(indice)){
            listaDeTareas.splice(indice, 1);                        // Se elimina un elemento de la lista de tareas
            this.escribirJson(listaDeTareas);                       // La lista queda modificada en memoria y la re-escribe
            console.log("Tarea borrada!");
        };
    }
}

module.exports = tareas; 
// Se guarda en el objeto module, en el atributo exports, la información de la variable tareas.                                          
// Puede hacerse uso de dicha información usando require() en otro archivo (en este caso, con aplicacion.js)
