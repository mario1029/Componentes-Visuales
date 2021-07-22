# PROYECTO DE PROGRAMACION BASADA EN COMPONENTES

Integrantes:

- Gonzalez, Mario C.I: 27.969.414 
- Jimenez, Jose C.I: 30.355.153
- Torres, Gerardo C.I: 29.869.119
- Zambrano, Nathalie C.I: 28.400.266


# Componentes-Visuales
Treeview, Card, Button


## Card

### Métodos

- `setCss()`: Metodo utilizado para cambiar de aspecto, reescribiendo el className
- `setTitle(string)`: Permite colocar un *título*
- `setSubtitle(string)`: Permite añadir un *subtítulo*
- `setContent(string)`: Se encarga de insertar el *contenido principal*
- `setImg(string)`: Añade una *imagen* en la tarjeta
- `setImgAlt(string)`: Permite añadir un *texto alternativo* de la imagen
- `setImgFloat(string)`: Define que *posición* toma la imagen dentro de la tarjeta, puede ser `left` o `right`
- `setFooter(string)`: Permite agregar el footer




## Button

### Métodos

- `setCss()`: Metodo utilizado para cambiar de aspecto, reescribiendo el className
- `setText(string)`: Permite colocarle un *titulo* a un boton
- `setOnclick(event)`: Permite asignarle un *evento* de clikeo al boton
- `setMouseOver(event)`: Permite asignarle al boton un *evento* que ocurrira cada ves que el cursor pase por encima de el
- `setDisabled(boolean)`: Permite *bloquear* (`true`) o *desbloquear* el boton (`false`)




## Treeview

### Métodos

- `setCss()`: Metodo utilizado para cambiar de aspecto, reescribiendo el className
- `attributeChangedCallback`: Cambia el estado de la lista entre seleccionado y no seleccionado
- `addElement`: Permite agregar una lista (en formato `json`) al treeview, con la cual se forma la estructura del mismo
- `setViewState`: Permite hacer los elementos de la lista visibles o desaparecerlos.

# Componente-Controlador

Componente encargado del registro y control de las instancias de los *componentes visuales*

### Atributos

- `registro`: Lista que almacena las instancias de los componentes visuales

### Metodos

- `register(instance)`: proceso de guardado de las instancias de los componentes visuales

- `setCSS(instance, env)`: metodo utilizado para cambiar el aspecto de un componente

# Componente-Comunicación

### Métodos

- `post(url, text)`: envía un POST request
- `get(url)`: envía un GET request
- `put(url, text)`: envía un PUT request
- `delete(url)`: envía un DELETE request

# Proceso de Comunicacion

El proceso de comunicacion sigue la siguiente lista de pasos:

- `envio de solicitud mediante el componente de comunicacion`
- `recepcion de la solicitud en el servidor`: el servidor puede ser creado manualmente por el desarrollador, pero a su vez le dajamos la posibilidad de usar nuestro *componente server*, el cual genera un servidor automaticamente.
- `Ejecucion dinamica del metodo de la clase especiicada en el body de la solicitud`: esta ejecucion se realiza mediante el proceso reflexivo, el cual tenemos encapsulado en el archivo *reflex.js*
- `envio de la respuesta del servidor`
- `recepcion de la respuesta en el cliente`: la respuesta recibida puede ser utilizada como desee el desarrollador, en nuestro ejemplo mostramos la respuesta a traves de uno de nuestros componentes visuales 
