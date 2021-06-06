import VisualComponent from "../VisualComponent.js";

class Button extends VisualComponent {

    constructor() {
        super();
        this.button = document.createElement('button');
        this.button.innerHTML = 'creo que soy un boton';
        this.wrapper.appendChild(this.button);
    }
}

export default Button;