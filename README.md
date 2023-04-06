# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Español

Es una pagina de un servidor de minecraft privado la cual esta destinada a un publico muy reducido de 5 a 7 personas

### App.js

El componente principal que representa la estructura básica de la pagina web.

En la parte superior del componente se importan varios archivos y librerías, incluyendo un archivo CSS, el logo, la librería de font-awesome y otros componentes de la propia aplicación.

En la función **App()**, se define el estado de la página web a través de varios estados, los cuales son 
* el estado de la página principal, 
* el estado de la página del servidor del cual se puede seleccionar, 
    * el estado de la página de dirección IP, 
    * el estado de la página de reglas 
    * y el estado de la página de mods. 
* y el estado de la página de lore, 

Esta serie de funciones permiten cambiar el estado de la página web según lo que el usuario haga sin recargarla.
<br>
<br>

### Contador.js / [ Inicio ]

Este componente es un contador que muestra una cuenta regresiva en días, horas, minutos y segundos hasta la fecha indicada (05/abr/2023). 

Utiliza el hook de React useState para manejar el estado de cada uno de los componentes de tiempo (días, horas, minutos, segundos), y el hook useEffect para actualizar el estado cada segundo, utilizando un intervalo de tiempo y la fecha de destino como parámetros.

El componente también contiene un reproductor de video de YouTube titulado "trailer oficial".
<br>
<br>

### Servidores2.js [ Servidor ]

Este componente importa los hooks useState, useEffect y useRef de React y define un componente llamado DropdownMenu.

Este componente es un menú desplegable que se utiliza para seleccionar entre diferentes opciones, Mods, Reglas e IP. 


Cada opción tiene un estado asociado que se actualiza cuando el usuario hace clic en ella, y se envía al componente padre mediante una función de devolución de llamada.


Cuando se selecciona una de las 3 opciones, su contenido se visualiza sin necesidad de recarga

### Mods [ Servidor ]

El componente Mods contiene una serie de sub componentes (ModSchema), que muestran una imagen y un título de cada mod. 

Al inicio se visualiza un enlace para descargar todos los mods. 

El código utiliza clases CSS para dar estilo a los elementos.

### Reglas [ Servidor ]

 El contenido es un conjunto de reglas que deben seguirse en el servidor de Minecraft.

 El contenido está estructurado en dos secciones: "INGAME" (dentro del juego) e "IRL" (en la vida real). Cada sección contiene un conjunto de reglas numeradas

 Este componente devuelve el contenido de las reglas envueltas en un div con una clase "reglasCont". Dentro de este div, hay un div que contiene el título "Reglas del servidor" y un párrafo que contiene las reglas en sí.

 ### Ip [ Servidor ]

El componente Ip renderiza el texto de la dirección IP y un icono de copiar. 

Cuando el usuario hace clic en el icono, se llama a la función copyText() para copiar el texto de la dirección IP en el portapapeles del usuario. 

Además, cuando se hace clic en el icono, se muestra una alerta indicando que la dirección IP se ha copiado.

 La función copyText utiliza la API navigator.clipboard.writeText() para copiar el texto de la dirección IP en el portapapeles del usuario.

 ### Lore [ Lore ]

 Este componente renderiza información sobre las diferentes ediciones de una serie de minecraft llamada "Cogimientoland" en forma de tarjetas.

 La función Lore define un componente interno llamado LoreSchema, que toma tres propiedades: titulo, imagen, y lore. titulo es una cadena de texto que describe el título de la historia, imagen es la ruta de la imagen que se mostrará en la tarjeta, y lore es una sección de texto que describe la historia.

 El CSS para el componente se define en un archivo separado llamado "Lore.css", y la fuente FontAwesome se importa desde un archivo separado llamado "font-awesome.min.css".

 Además, la función Lore utiliza imágenes importadas desde archivos separados
 <br>
 <br>

## English
This is a page of a private Minecraft server which is intended for a very small audience of 5 to 7 people.

### App.js
The main component that represents the basic structure of the webpage.

At the top of the component, several files and libraries are imported, including a CSS file, the logo, the font-awesome library, and other components of the application.

In the **App()** function, the state of the webpage is defined through several states, which are

the state of the main page,
the state of the server page from which you can select,
the state of the IP address page,
the state of the rules page
and the state of the mods page.
and the state of the lore page,
These functions allow changing the state of the webpage according to what the user does without reloading it.
<br>
<br>

### Contador.js [ Inicio ]
This component is a countdown timer that displays the remaining days, hours, minutes, and seconds until the specified date (05/apr/2023).

It uses the React useState hook to handle the state of each of the time components (days, hours, minutes, seconds), and the useEffect hook to update the state every second, using a time interval and the target date as parameters.

The component also contains a YouTube video player titled "official trailer".
<br>
<br>

### Servidores2.js [ Servidor ]
This component imports the useState, useEffect, and useRef hooks from React and defines a component called DropdownMenu.

This component is a dropdown menu that is used to select between different options, Mods, Rules, and IP.

Each option has an associated state that is updated when the user clicks on it, and is sent to the parent component through a callback function.

When one of the 3 options is selected, its content is displayed without the need to reload.

### Mods [ Servidor ]
The Mods component contains a series of sub-components (ModSchema), which show an image and a title of each mod.

At the beginning, a link to download all the mods is displayed.

The code uses CSS classes to style the elements.

### Reglas [ Servidor ]
The content is a set of rules that must be followed on the Minecraft server.

The content is structured into two sections: "INGAME" (in the game) and "IRL" (in real life). Each section contains a set of numbered rules.

This component returns the content of the rules wrapped in a div with a class "reglasCont". Inside this div, there is a div containing the title "Server Rules" and a paragraph containing the rules themselves.

### IP [ Servidor ]
The IP component renders the text of the IP address and a copy icon.

When the user clicks on the icon, the copyText() function is called to copy the text of the IP address to the user's clipboard.

In addition, when the icon is clicked, an alert is displayed indicating that the IP address has been copied.

The copyText() function uses the navigator.clipboard.writeText() API to copy the text of the IP address to the user's clipboard.

### Lore [ Lore ]
This component renders information about the different editions of a Minecraft series called "Cogimientoland"