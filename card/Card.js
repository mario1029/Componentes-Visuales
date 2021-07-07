import VisualComponent from "../VisualComponent.js";
import {controller} from '../controlador/controlador.js';

class Card extends VisualComponent {

    constructor({id}) {
        super();
        this.id=id;
        
        this.wrapper.className = "card";

        this.img = document.createElement('img');
        this.img.className = 'float-img';
        this.wrapper.appendChild(this.img);

        this.title = document.createElement('h2');
        this.wrapper.appendChild(this.title);

        this.subtitle = document.createElement('h3');
        this.wrapper.appendChild(this.subtitle);

        this.content = document.createElement('p');
        this.wrapper.appendChild(this.content);

        this.footer = document.createElement('p');
        this.wrapper.appendChild(this.footer);
        
        controller.register(this);
    }

    setCSS(){
        this.wrapper.className='card_env_'+this.env;
    }

    setTitle(title) {
        this.title.innerHTML = title;
    }

    setSubtitle(subtitle) {
        this.subtitle.innerHTML = subtitle;
    }

    setContent(content) {
        this.content.innerHTML = content;
    }

    setImg(path) {
        this.img.src = path;
    }

    setImgAlt(altText) {
        this.img.alt = altText;
    }

    setImgFloat(value) {
        document.documentElement.style.setProperty('--float-value', value == 'right' ? value : 'left');
    }

    setFooter(footer) {
        this.footer.innerHTML = footer;
    }
}

export default Card;