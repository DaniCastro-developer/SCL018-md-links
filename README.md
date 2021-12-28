<p aling=center> <img src= files/welcome.png width= 600px> </p>


***
## **¿Qué es dc-md-links?**

dc-md-links es una herramienta de línea de comando (CLI) así como una librería en JavaScript, la cual lee un archivo con extensión md y retorna una array con los links que éste contiene. Además, se puede agregar la opción de validar estos links y recibir el estado de cada uno de ellos.

***
## **Istalación**

npm install dc-md-links

## **¿Cómo usar?**

### En el archivo JS:

const mdlinks = require('dc-md-links');   

### En la terminal:

md-links <file> [options]

## **¿Cómo funciona en JavaScript API?**

#### `mdLinks(path, options)`

##### Argumentos

* `path`:  nombre del **archivo** a analizar. Ejemplo: README.md.
* `options`: Un objeto con **únicamente** la siguiente propiedad:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función **retorna una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `type`: Tipo de URL.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `type`: Tipo de URL.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks('example.md')
  .then(links => {
    // => [{ type, href, text }, ...]
  })
  .catch(console.error);

mdLinks("example.md", { validate: true })
  .then(links => {
    // => [{ type, href, text, status, ok }, ...]
  })
  .catch(console.error);
```

## **¿Cómo funciona en CLI (Command Line Interface - Interfaz de Línea de Comando)?**

### Ejecución a través de la **terminal**:

`md-links <file> [options]`

Por ejemplo:
```sh
$ md-links example.md 
```
<img src=files/md-links.png>

El comportamiento por defecto no debe validar si las URLs responden ok o no,
solo debe identificar el archivo markdown, analizarlo e imprimir los links que vaya encontrando, junto con el tipo, texto y href.

### Option **validate**

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links example.md --validate
```
<img src=files/validate.png>


***
## Información técnica

### Dependencias 
* node.js: 16.13.1
* chalk: 5.0.0
* figlet: 1.5.2
* markdown-link-extractor: 1.3.0
* node-fetch: 3.1.0

### Planificación

* [Diagrama de flujo](https://miro.com/app/board/uXjVOY08Roo=/?invite_link_id=43100749155)

<img src= files/flow.jpeg>


* Organización - issues y milestones

[ Github Project MD-links DC ](https://github.com/DaniCastro-developer/SCL018-md-links/projects/1)


***
## Autora

*Daniela Castro Salazar*