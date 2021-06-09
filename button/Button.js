import VisualComponent from "../VisualComponent.js";

class Button extends VisualComponent {

    constructor(tipo){
        super();
        this.button = document.createElement('button');
        this.wrapper.appendChild(this.button);
        this.button.className =verificar(tipo)? tipo:'ButtonBasic';// Basic estara por defecto
    }

    setText(texto){
        this.button.innerText=texto;
    }

    setOnclikEvent(event){
        this.button.addEventListener("click",event);
    }

    setMouseOver(event){
        this.button.addEventListener("mouseover",event);
    }

    setDisabled(valor){
        this.button.disabled=valor
    }

}

//verificar si es uno de los tipos exitentes
function verificar(params) {
    if(params==="ButtonBig"||params==="ButtonBasic"||params==="ButtonMargen")
        return true;
}

export default Button;