<p aling=center> <img src= files/welcome.png width= 600px> </p>


***
## **¿Qué es dc-md-links?**

[**dc-md-links**](https://www.npmjs.com/package/dc-md-links)  es una herramienta de línea de comando (CLI), como también una librería en JavaScript, la cual lee un archivo con extensión md y retorna una array con los links que éste contiene. Además, puedes agregar la opción de validar estos links y recibir el estado de cada uno de ellos.

***
## **Instalación**

```sh
npm install dc-md-links
```
## **¿Cómo usar?**

### En el archivo JS:

const mdlinks = require('dc-md-links');   

### En la terminal:

```sh
md-links < name-file > [options]
```

## **¿Cómo funciona en CLI (Command Line Interface - Interfaz de Línea de Comando)?**

### Ejecución a través de la **terminal**:

`md-links <file> [options]`

Por ejemplo:
```sh
$ md-links example.md 
```
<img src=files/md-links.png>

El comportamiento por defecto debe identificar el archivo markdown, analizarlo e imprimir los links que vaya encontrando, junto con el tipo, texto y href.

### Option **validate**

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links example.md --validate
```
<img src=files/validate.png>


***
## **Información técnica**

### Dependencias 
* node.js: 16.13.1
* chalk: 5.0.0
* figlet: 1.5.2
* marked: 4.0.8
* node-fetch: 3.1.0

### Planificación

* [Diagrama de flujo](https://miro.com/app/board/uXjVOY08Roo=/?invite_link_id=43100749155)

<img src= files/flow.jpeg>


* Organización - issues y milestones [Github Project MD-links DC](https://github.com/DaniCastro-developer/SCL018-md-links/projects/1)


***
## **Autora**

*Daniela Castro Salazar*