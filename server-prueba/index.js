// const server = new (require("./frameworkBack/components/server"))();

// server.arrancar();

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors=  require('cors');
const { reflexionClase } = require('./frameworkBack/controllers/reflex');

const PORT = 5000;

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.post('/', (req, res) => {
    console.log(req.body)
    const {objectname, method, paramas, accion}= req.body;
    try{
        console.log(`Ha llegado / con ${objectname}`);
        //proceso reflexivo
        console.log(objectname)
        var obj= reflexionClase('../../BO/'+objectname,method,paramas); 
        res.json({ status: 200, data:obj ,message: 'Comunicacion finalizada exitosamente' });
    }catch(e){
        console.log(e);
        res.json({ status: 400, error:e ,message: 'ocurrio un problema en la comunicacions' });
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
})