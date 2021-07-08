import { controller } from './controlador/controlador.js';
import Comms from './components/comms/Comms.js'

var botones = document.getElementById('botones');
var carta = document.getElementById('card');
var treeview = document.getElementById('treeview');

// Botones
var button = new frameWork.Button({ id: 'ButtonMargen' });
var button2 = new frameWork.Button({ id: 'boton' });
var button3 = new frameWork.Button({ id: 'mybutton' });

controller.setCSS(button3, 1);
controller.setCSS(button, 2);

button.draw();
button.setPosition(0, 0);
console.log(button.position);
button.setDimension(140, 20);
console.log(button.dimension);
button.setText('boton de prueba');
button.setMouseOver(() => {
  console.log('hola');
});
button.setDisabled(false);

button2.draw();
button2.setPosition(170, -20);
console.log(button.position);
button2.setDimension(140, 20);
console.log(button.dimension);
button2.setText('boton de prueba');
//button2.setDisabled(true);

button3.draw();
button3.setPosition(340, -40);
console.log(button.position);
button3.setDimension(140, 20);
console.log(button.dimension);
button3.setText('boton de prueba');
//button3.setDisabled(true);

botones.appendChild(button.wrapper);
botones.appendChild(button2.wrapper);
botones.appendChild(button3.wrapper);

// CARD
var card0 = new frameWork.Card({ id: 'myCard0' });
var card1 = new frameWork.Card({ id: 'myCard1' });
var card2 = new frameWork.Card({ id: 'myCard2' });
var card3 = new frameWork.Card({ id: 'myCard3' });

controller.setCSS(card0, 0)
controller.setCSS(card1, 1);
controller.setCSS(card2, 2);
controller.setCSS(card3, 3);

// Card0
card0.draw();
card0.setSubtitle('DEE');
card0.setTitle('DAA');
card0.setContent('DIII');
card0.setImg('./resources/xd.png');
card0.setImgAlt('No tenia más fotos en mi PC y se me fue el inter');
card0.setFooter('Footer chiquito');
card0.setImgFloat('left');


// Card1
card1.draw();
card1.setSubtitle('DEE');
card1.setTitle('DAA');
card1.setContent('DIII');
card1.setImg('./resources/xd.png');
card1.setImgAlt('No tenia más fotos en mi PC y se me fue el inter');
card1.setFooter('Footer chiquito');
card1.setImgFloat('left');


carta.appendChild(card0.wrapper);
carta.appendChild(card1.wrapper);


// Tree view
var tree = new frameWork.Treeview({ id: 'myTreeview' });
tree.draw();

controller.setCSS(tree, 0);

var data = {
  Hijos: [
    {
      Nombre: 'Carpeta1',
      Hijos: [
        {
          Nombre: 'arhivo.png',
          Hijos: [],
        },
        {
          Nombre: 'proyecto.pdf',
          Hijos: [],
        },
      ],
    },
    {
      Nombre: 'Capeta2',
      Hijos: [
        {
          Nombre: 'ayuda.txt',
          Hijos: [],
        },
        {
          Nombre: 'otra_cosa.ppt',
          Hijos: [],
        },
      ],
    },
  ],
};

tree.addElement(data.Hijos, tree);

treeview.appendChild(tree.wrapper);
console.log(controller.registro);


// Comms
const comms = new Comms();
comms.post("http://localhost:5000/", "Hola").then((data) => console.log(data));
// comms.get("http://localhost:5000/").then((data) => console.log(data));
// comms.put("http://localhost:5000/", "Hola").then((data) => console.log(data));
// comms.delete("http://localhost:5000/").then((data) => console.log(data));
