import Button from "./button/button.js";

var button = new Button('ButtonMargen');
var button2 = new Button('ButtonBig');
var button3= new Button();

button.draw();
button.setPosition(0, 100);
console.log(button.position);
button.setDimension(200, 100);
console.log(button.dimension);
button.setText("boton de prueba");
button.setMouseOver(()=>{
    console.log("hola");
})
button.setDisabled("true");
button.appendBody();

button2.draw();
button2.setPosition(150, 0);
console.log(button.position);
button2.setDimension(200, 100);
console.log(button.dimension);
button2.setText("boton de prueba");
//button2.setDisabled("true");
button2.appendBody();

button3.draw();
button3.setPosition(300, -100);
console.log(button.position);
button3.setDimension(200, 100);
console.log(button.dimension);
button3.setText("boton de prueba");
button2.setDisabled("true");
button3.appendBody();