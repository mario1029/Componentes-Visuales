import VisualComponent from "../VisualComponent.js";
import {controller} from '../../controlador/controlador.js';

class Button extends VisualComponent {

    constructor({id}){
        super();
        this.id=id;
        this.button = document.createElement('button');
        this.wrapper.appendChild(this.button);
        this.button.className ='Button_env_0';// Basic estara por defecto
        controller.register(this);
    }

    setCSS(){
        if(this.env<0 || this.env>2){
            console.log(`No existe ambiente para el elemento ${this.id} con el ENV en ${this.env}`)
            this.env=0;
          }
        this.button.className='Button_env_'+this.env;
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

export default Button;