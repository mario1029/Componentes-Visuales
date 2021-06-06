class VisualComponent {

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.style.display = 'none';
        this.wrapper.style.position = 'relative';
        this.hola = document.createElement('h2');
        this.hola.innerHTML = 'Buenas';
        this.wrapper.appendChild(this.hola);
        document.body.appendChild(this.wrapper);
    }

    draw() {
        this.wrapper.style.display = 'block';
    }

    hide() {
        this.wrapper.style.display = 'none';
    }

    // Posición se coloca en px
    setPosition(left, top) {
        this.wrapper.style.left = `${left}px`;
        this.wrapper.style.top = `${top}px`;
    }

    get position() {
        return `left: ${this.wrapper.style.left} top: ${this.wrapper.style.top}`;
    }

}

export default VisualComponent;