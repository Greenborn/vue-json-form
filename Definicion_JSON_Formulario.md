## Introducción

A continuación se define la estructura del JSON que se encargará de almacenar la configuración del formulario.

Dicho JSON será almacenado en la base de datos MongoDB del sistema de formularios, y será interpretado por el 
mismo para la generación del mismo.

## Parámetros de diseño

Se tiene en cuenta que como framework de estilos se usa Bootstrap, por lo que para la generación del formulario
se tiene que tener en cuenta que en el mismo se genería considerando un layount de columnas y filas.

Debiendo generar el HTML de acuerdo a orden en el cual se configuran las columnas.

También se tiene en cuenta que se podría agregar información general de configuración para múltiples propósitos
por lo que en un principio el JSON tendría dos claves principales, una destinada a almacenar dicha información, 
y otra destinada a la definición de la estructura HTML.

También se provee la posibilidad de definir relaciones o condiciones entre campos.

Por el momento se identificarían solo el siguiente tipo de relacion (dejando abiera la posibilidad de definir otras a futuro):

- **Activación de campo**: Se usaría definir la habilitación de un campo con respecto a otro / otros.

Siendo en un principio:
```
{
  "general_data": {
    clave1 : valor1,
    clave2 : valor2,
    claveN : valorN
  },
  "html_def":[
    { .... columna 0 ......},
    { .... columna 1 ......},
    { .... columna 2 ......},
    { .... columna 3 ......},
    { .... columna N ......},
  ],
  "fields_rels":[
    { --- definicion de relacion entre campos ------ }
  ]
}
```
También se tiene en cuenta que el formulario si o si deberá ser generado en el backend, para poder agregar 
metatags como los de OpenGraph.

Si se genera por completo en el back también tendría el beneficio que facilitar el SEO al poder ser scrapeado
por los robots de búsqueda de forma más facil.

## Estado del formulario
El mismo por lo pronto puede tomar alguno de los siguientes estados:
- draft: Borrador

- published: Publicado

## Claves básicas presentes en General data

- En principio agregaría los metatags, para poder definir por Ej. los correspondientes al standar OpenGraph
y relacionados a SEO

- El atributo Title

- La clave pública del captcha

- Orígenes de datos externos, por Ej. para completar el listado de provincias, generos, redes sociales, etc: creo que en un principio se podrían detallar allí mismo como Array, aunque también a futuro se podría pensar en agregar claves para referenciar a alguna información a ser devuelta por un nuevo endpoint del sistema de formularios.

- Texto botón submit

- Texto mensaje Ok

- Estado: si el formulario está en forma de borrador o publicado

Por lo que de momento el JSON quedaría así:
```
{
  "general_data": {
    "status": "draft",
    meta_tags : [ { name: "", content: ""}, { name: "", content: ""}, { name: "", content: ""} ],
    title : "Formulario 1"
    captcha_public_key : "sdkljfoiauh8093h48ns9dfiojn/_-a809uyw8097rhniedf",
    field_options : {
      provincias : [ { "id": 0, label: "Buenos Aires" }, { "id": 1, label: "CABA" } ... ],
      redes_sociales: [ { "id": 0, label: "Twitter" }, { "id": 0, label: "Instagram" } ...... ],
    },
    submit_msg: "Gracias, por inscribirte ..... .. .. revise su email .... ",
    claveN : valorN
  },
  "html_def":[
    { .... columna 0 ......},
    { .... columna 1 ......},
    { .... columna 2 ......},
    { .... columna 3 ......},
    { .... columna N ......},
  ],
  "fields_rels":[
    { --- definicion de relacion entre campos ------ }
  ]
}
```

## Definición HTML

Para definir la estructura del formulario, se tiene previsto parametrizar cada uno de los posibles campos
que pueden estar involucrados en un formulario, así como componentes standar para agregar en el mismo, indentificando al menos los siguientes:

### Componentes básicos

- **cont_text**: Permite el agregado de una caja con texto en su interior, la idea del mismo es la de ser
utilizado como un separador de secciones, en el encabezado o en áreas en las cuales se necesite ampliar la 
información, el mismo recibiría como parámetros:
  - **html**: Contenido HTML que se pegaría directamente en el contenido (se supone que solo para definir texto, aunque se podría agregar cualquier contenido llegado al caso pero esa no sería la idea).
  - **color**: Color de la fuente.
  - **justify**: Tipo de justificado del texto, si se alinea a la derecha, izquierda, centro o justificado.
  - **bg_color**: Color de fondo que se aplicaría a todo el contenedor.
  - **class**: Clases de bootstrap, en principio para definir el ancho de la columna, (la clase col está implicita).

- **imagen**: Solo para agregar una imagen, sus parámetros serían:
  - **src**: URL de la imagen
  - **min_w**: Ancho mínimo
  - **max_w**: Ancho máximo
  - **min_h**: Alto mínimo
  - **max_h**: Alto máximo
  - **alt**: Texto alternativo de la imagen
  - **class**: Clases de bootstrap, en principio para definir el ancho de la columna.

### Definición de filas

Una fila estaría definida por las siguientes propiedades:

- **class**: Clases de bootstrap, que podrían ser utilizadas para por Ej. centrar columnas, etc, la clase "row" ya estaría implicita.
- **content**: Arreglo que define el contenido de la fila, ya sea alguno de los componentes ya citados o los campos a nombrar a continuación.

Por lo que de momento el JSON quedaría así:
```
{
  "general_data": {
    "status": "draft",
    meta_tags : [ { name: "", content: ""}, { name: "", content: ""}, { name: "", content: ""} ],
    title : "Formulario 1"
    captcha_public_key : "sdkljfoiauh8093h48ns9dfiojn/_-a809uyw8097rhniedf",
    field_options : {
      provincias : [ { "id": 0, label: "Buenos Aires" }, { "id": 1, label: "CABA" } ... ],
      redes_sociales: [ { "id": 0, label: "Twitter" }, { "id": 0, label: "Instagram" } ...... ],
    },
    submit_msg: "Gracias, por inscribirte ..... .. .. revise su email .... ",
    claveN : valorN
  },
  "html_def":[
    { 
      "class": "justify-content-md-center", 
      "content": [
        {
          "component": "VFJImage",
          "params": {
            "src": "URL IMAGEN DE CABECERA",
            "alt": "Formulario 1",
            "min_w": "",
            "max_w": "",
            "min_h": "",
            "max_h": "5rem"
          },
          "class":""
        }
      ] 
    },
    {
      "class": "justify-content-md-center", 
      "content": [
        {
          "component": "VFJText",
          "params": {
            "html": "<h1> Inscripción Formulario 1</h1>",
            styles: { color: #FFF }
          },
          "class":"",
        }
      ]
    },
    { .... columna 2 ......},
    { .... columna 3 ......},
    { .... columna N ......},
  ],
  "fields_rels":[
    { --- definicion de relacion entre campos ------ }
  ]
}
```

### Definición de campos
