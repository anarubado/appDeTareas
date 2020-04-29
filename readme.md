## Aplicación de tareas

El objeto process de Node.js es un objeto global que provee información y control sobre el proceso que está ejecutando un script Node.
Siendo global, siempre está disponible para las aplicaciones de NodeJS sin hacer uso de require() lo que significa que puede ser usado en cualquier localización de código NodeJS.

Existe una propiedad de process llamada argv. Ésta retorna un array conteniendo los argumentos pasados al process cuando son ejecutados en la linea de comandos.
El primer elemento hace referencia a la localización de node y el segundo, a la localización del archivo ejecutado. Los elementos remanentes serán argumentos adicionales agregados también por consola.

Esta propiedad es usada para agregar elementos a dicho array a través de la consola y así, poder extraerlos y procesarlos en nuestras aplicaciones de Node. De esta manera, será posible obtener dichos elementos y ejecutar distintas acciones con ellos.

Ejemplo
Input por consola: 
 - node aplicacion.js listar
Output posible:
 - listar() 

Las acciones ejecutables son:
 * listar
 * verUna
 * agregarUna
 * borrarUna
 * modificarEstado

 La aplicación posee los siguientes archivos:
 - tareas.js donde se especifican las funcionalidades de la aplicación
 - data.json donde persisten las tareas y sus estados
 - aplicacion.js como archivo main





