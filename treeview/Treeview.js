import VisualComponent from "../VisualComponent.js";

class Treeview extends VisualComponent {

    constructor() {
        super();
        this.list = document.createElement("ul");
        this.wrapper.appendChild(this.list);

        this.wrapper.className = "treeview";

        this.raiz;
        this.select;
        this.noselect;
    }

   static get observedAttributes(){
        return ['select','noselect'];
    }

    attributeChangedCallback(att, nuevo){
         switch(att){
            case "select":
                this.select= nuevo;
            break;

            case "noselect":
                this.noselect = nuevo;
            break;
        }
    }


    addElement(rama, raiz){

        for(let i in rama){
            if(rama[i].Hijos != 0){
                let content = document.createElement("li"); /*SE CREA UN ELEMNTO DE LISTA "li"*/
                content.innerHTML = `<strong> ${rama[i].Nombre} </strong>`;/*SE AÑADE NOMBRE DE CARPETA*/
                
                console.log(rama[i])

                let nuevaraiz = document.createElement("ul");/*SE CREA UNA NUEVA LITSA "nuevaraiz"*/
                nuevaraiz.className = "ElementoCerrado";
                

                raiz.wrapper.appendChild(content);
                raiz.wrapper.appendChild(nuevaraiz);

                this.setViewState(content, nuevaraiz);/*SE CREAR EL EVENTO DE LA LISTA DESPLEGABLE*/
                this.addElement(rama[i].Hijos, nuevaraiz);

            }else{

                let content = document.createElement("li");
                content.innerHTML = `${rama[i].Nombre}`;

                raiz.appendChild(content);/*SE AÑADE ELEMENTO A LA LITSA RAIZ*/
            }
        }

    }

    setViewState(padre,eventolista){
        let presionado = true;
        padre.onclick = () =>{
 
            if(presionado){
                eventolista.style.display = "none";
                padre.style.color = this.noselect;
                presionado = false;
            }else{
                eventolista.style.display = "block";
                padre.style.color = this.select;
                presionado = true;
            }
        }
    }



}

export default Treeview;