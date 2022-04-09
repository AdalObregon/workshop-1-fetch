/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// console.log("Happy hacking :) ---");
//? url de mi API, la guardo en una variable
const url = "https://platzi-avo.vercel.app/api/avo";

//* Web Api -> fetch, se usa para traer recursos de cualquier sitio web, lo unico que se le pasa dentro es la url, le pasamos el nombre de nuestra variable creada.
//? 1.- Conectarnos al servidor
//* Podemos mejorando pasando de promise -> async/await
window.fetch(url)
  //? 2.- Procesar la respusta y conectarla en JSON
  .then((response) => response.json())
  //? 3.- JSON -> Data -> Renderizar informacion en browser.
  .then((responseJson) => {
      const todosLosItems = [];
    responseJson.data.forEach((item) => {
      //? Crear imagen
      const imagen = document.createElement("img");
      //? Crear titulo
      const tittle = document.createElement("h2");

      //? Crear precio
      const price = document.createElement("div");

      //* Crear div con los elementos
      const container = document.createElement("div");
      container.append(imagen, tittle, price);
    //   container.appendChild(imagen);
    //   container.appendChild(tittle);
    //   container.appendChild(price);

    // document.body.appendChild(container);
    todosLosItems.push(container);
});
    document.body.append(...todosLosItems)

  });
