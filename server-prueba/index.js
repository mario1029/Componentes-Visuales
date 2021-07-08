const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 5000;

app.use(express.text());
app.use(morgan('dev'));

app.use((req, res, next) => {                                                                 
  res.header("Access-Control-Allow-Origin", "*");                                        
  res.header('Access-Control-Allow-Methods', "POST, GET, PUT, DELETE, OPTIONS");     
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");    
  res.header("Access-Control-Allow-Credentials", true);              
  next();        
});

app.post("/", (req, res) => {
  console.log(`Ha llegado POST con ${req.body}`);
  res.json({message: "Ha llegado POST"});
})
app.get("/", (req, res) => {
  console.log(`Ha llegado GET`);
  res.json({message: "Ha llegado GET"});
})
app.put("/", (req, res) => {
  console.log(`Ha llegado PUT con ${req.body}`);
  res.json({message: "Ha llegado PUT"});
})
app.delete("/", (req, res) => {
  console.log(`Ha llegado DELETE`);
  res.json({message: "Ha llegado DELETE"});
})

app.listen(PORT, () => {
  console.log(`Escuchando en puerto ${PORT}`);
})