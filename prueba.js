import Button from "./button/button.js";
import Card from "./card/Card.js";

var button = new Button('ButtonMargen');
var button2 = new Button('ButtonBig');
var button3 = new Button();

button.draw();
button.setPosition(0, 0);
console.log(button.position);
button.setDimension(140, 20);
console.log(button.dimension);
button.setText("boton de prueba");
button.setMouseOver(() => {
    console.log("hola");
})
button.setDisabled(false);

button2.draw();
button2.setPosition(170, -20);
console.log(button.position);
button2.setDimension(140, 20);
console.log(button.dimension);
button2.setText("boton de prueba");
//button2.setDisabled(true);

button3.draw();
button3.setPosition(340, -40);
console.log(button.position);
button3.setDimension(140, 20);
console.log(button.dimension);
button3.setText("boton de prueba");
//button3.setDisabled(true);
// Card

var card = new Card();
card.draw();
card.setSubtitle('DEE');
card.setTitle('DAA');
card.setContent('DIII');
card.setImg('./resources/xd.png');
card.setImgAlt('No tenia más fotos en mi PC y se me fue el inter');
card.setFooter("Footer chiquito");
card.setImgFloat('left');