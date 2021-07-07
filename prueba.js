import {controller} from './controlador/controlador.js';

var botones= document.getElementById("botones");
var carta= document.getElementById("card");
var treeview=document.getElementById('treeview');

var button = new frameWork.Button({id:'ButtonMargen'});
var button2 = new frameWork.Button({id:'boton'});
var button3 = new frameWork.Button({id:'mybutton'});

controller.setCSS(button3,1)
controller.setCSS(button,2)

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

botones.appendChild(button.wrapper);
botones.appendChild(button2.wrapper);
botones.appendChild(button3.wrapper);

// Card
var card = new frameWork.Card({id:'myCard'});
card.draw();
card.setSubtitle('DEE');
card.setTitle('DAA');
card.setContent('DIII');
card.setImg('./resources/xd.png');
card.setImgAlt('No tenia más fotos en mi PC y se me fue el inter');
card.setFooter("Footer chiquito");
card.setImgFloat('left');

carta.appendChild(card.wrapper);

//Tree view
var tree = new frameWork.Treeview({id:'myTreeview'});
tree.draw();

var data = {
    "Hijos":[
        {"Nombre":"Carpeta1",
         "Hijos":[
            {
                "Nombre":"arhivo.png",
                "Hijos":[]
            },
            {
                "Nombre":"proyecto.pdf",
                "Hijos":[]
            }
         ]
        },
        {"Nombre":"Capeta2",
         "Hijos":[{
                "Nombre":"ayuda.txt",
                "Hijos":[]
            },
            {
                "Nombre":"otra_cosa.ppt",
                "Hijos":[]
            }]
        }]};

tree.addElement(data.Hijos, tree);

treeview.appendChild(tree.wrapper);

console.log(controller.registro)
