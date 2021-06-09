class VisualComponent {

    constructor() {
        this.wrapper = document.createElement('div');
        this.wrapper.style.display = 'none';
        this.wrapper.style.position = 'relative';
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

    setDimension(width, height) {
        this.wrapper.style.width = `${width}px`;
        this.wrapper.style.height = `${height}px`;
    }

    get dimension() {
        return `width: ${this.wrapper.style.width} height: ${this.wrapper.style.height}`;
    }

}

export default VisualComponent;