const reflexionClase= (nombre, metodo, parametros)=>{
    var obj= new (require(nombre))();      
    const result=obj[metodo](parametros)
    return result

    //  Traducido a:

    //var objeto= require(nombre); //nombre es la direccion de un archivo, en especifico la direccion BO
    //var obj= new objeto();  //esto en el caso de que sea una clase, en el caso de que sean funciones todavia esta en pruebas
    //const result= obj.metodo(parametros); //ejecutaria el metodo de la clase
    //return result;  //imprime el resultado
}


//metodo reflexivo para funciones, aun en pruebas...

// const reflexionFuncion= (nombre, funcion, parametros)=>{
//     var obj= require(nombre)[funcion](parametros);   
//     return obj
// }

module.exports= {reflexionClase};