import Button from "./button/button.js";

var button = new Button();

button.draw();
button.setPosition(150, 100);
console.log(button.position);
button.setDimension(200, 100);
console.log(button.dimension);
button.appendBody();