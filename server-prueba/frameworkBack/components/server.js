//configuraciones de arrancado de server
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors=  require('cors');
const { reflexionClase } = require('../controllers/reflex');

class server{

    PORT = 5000;
    endPoints = ['/','/upload'];
    carpetaBO='../../'

    constructor(){
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));      
        app.use(
            cors()
        );
    }

    //metodos
    arrancar(){
        this.endPoints.forEach((point)=>{
            console.log(point )
            app.post(point, (req, res) => {
                console.log(req.body)
                const {objectname, method, paramas, accion}= req.body;
                try{
                    console.log(`Ha llegado ${point} con ${objectname}`);
                    //proceso reflexivo
                    console.log(this.carpetaBO+objectname)
                    var obj= reflexionClase(this.carpetaBO+objectname,method,paramas); 
                    res.json({ status: 200, data:obj ,message: 'Comunicacion finalizada exitosamente' });
                }catch(e){
                    console.log(e);
                    res.json({ status: 400, error:e ,message: 'ocurrio un problema en la comunicacions' });
                }
                
            })
        })
        app.listen(process.env.PORT || this.PORT, () => {
            console.log(`Escuchando en puerto ${this.PORT}`);
        })
    }

    setEndPoints(points){
        console.log(points)
        this.endPoints=points.map((point)=>{

            return point.indexOf('/')? '/'+point:point;
        });
    }

    setCarpetaBO(carpeta){
        this.carpetaBO=this.carpetaBO +carpeta;
    }
}


module.exports= server;
// //endpoint

// server.post('/',(req, res)=>{
//     try {
//         const {/* ... los parametros... */}= req.body;

//         //proceso de reflexion
    
//         //constante con el mensaje hallado del metodo del
//         //objeto de negocio conseguido mediante reflexion

//         const respuesta //= resultado del metodo
//         res.status(200).json({ status: 200, data: respuesta, message: 'respuesta enviada!' });
//     } catch (e) {
//         res.status(500).json({ status: 500, error: e, message: 'Error al enviar la respuesta' });
//     }
    
// })