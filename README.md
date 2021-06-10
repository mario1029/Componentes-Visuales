# Componentes-Visuales
Treeview, Card, Button


## Card

### Métodos

- `setTitle(string)`: Permite colocar un *título*
- `setSubtitle(string)`: Permite añadir un *subtítulo*
- `setContent(string)`: Se encarga de insertar el *contenido principal*
- `setImg(string)`: Añade una *imagen* en la tarjeta
- `setImgAlt(string)`: Permite añadir un *texto alternativo* de la imagen
- `setImgFloat(string)`: Define que *posición* toma la imagen dentro de la tarjeta, puede ser `left` o `right`
- `setFooter(string)`: Permite agregar el footer




## Button

### Constructor

Su constructor permite recibir un String con el tipo de boton que se desea utilizar, al no incluir alguno de estos tipos se tomara el `ButtonBasic` por defecto, las opciones  de tipo de boton son:

- `ButtonBasic`: Boton basico con efectos simples de enfoque y clikeo del cursor
- `ButtonBig`: Boton con efecto *3d*, caracterizado por agrandarse al ser enfocado por el cursor
- `ButtonMargen`: Boton con *margen*, caracterizdo por intercmbiar el color de su fuente y fondo al ser enfocado por el cursor

### Métodos

- `setText(string)`: Permite colocarle un *titulo* a un boton
- `setOnclick(event)`: Permite asignarle un *evento* de clikeo al boton
- `setMouseOver(event)`: Permite asignarle al boton un *evento* que ocurrira cada ves que el cursor pase por encima de el
- `setDisabled(boolean)`: Permite *bloquear* (`true`) o *desbloquear* el boton (`false`)




## Treeview

### Métodos

- `attributeChangedCallback`:
- `addElement`: Permite agregar una lista (en formato `json`) al treeview, con la cual se forma la estructura del mismo
- `setViewState`: