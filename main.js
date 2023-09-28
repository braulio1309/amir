let users = [];
let userLogged = null;
let videos = [];

//Lecturas de usuarios
fetch("post.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    users = data;
    localStorage.setItem("users", JSON.stringify(users));
  })
  .catch((error) => console.error("Error al cargar el archivo JSON:", error));
//Final de lecturas

//LEcturas de videos
fetch("videos.json")
  .then((response) => response.json())
  .then((data) => {
    videos = data;
    console.log(videos);
    // Obtener el elemento div con el ID "videos"
    const contenedorVideos = document.getElementById("videos");

    // Número de imágenes que deseas generar
    const numeroDeImagenes = videos.length;

    // Generar las imágenes y agregarlas al div
    for (let i = 0; i <= numeroDeImagenes; i++) {
      // Crear un elemento img
      const img = document.createElement("img");

      // Establecer la fuente (URL) de la imagen
      console.log(videos[i].url)
      img.src = videos[i].url; // Reemplaza con la URL de tus imágenes

      // Agregar la imagen al div
      contenedorVideos.appendChild(img);
    }
  })
  .catch((error) => console.error("Error al cargar el archivo JSON:", error));
//Final lectura videos
//Registro de usuarios
const formulario = document.getElementById("registro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtiene los valores de los campos del formulario
  const nombre = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("password").value;

  if (users.findIndex((item) => item.email === email) == -1) {
    users.push({
      username: nombre,
      password: mensaje,
      email: email,
    });
    console.log("usuario registrado");
  } else {
    console.log("usuario ya esta registrado");
  }

  console.log(users);
});
//Final registro usuarios

//Inicio login
const login = document.getElementById("login");
login.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  if (
    users.findIndex(
      (item) => item.email === email && item.password === password
    ) != -1
  ) {
    let index = users.findIndex(
      (item) => item.email === email && item.password === password
    );
    userLogged = users[index];

    console.log("usuario inicio sesion", userLogged);
    localStorage.setItem("user", JSON.stringify(userLogged));

    window.location.href = "./index.html";
  } else {
    console.log("usuario no encontrado");
  }
});
//Final login

/*
for (let i = 1; i <= numeroDeVideos; i++) {
    // Crear un elemento de video
    const video = document.createElement("video");

    // Establecer la fuente (URL) del video
    video.src = videos[i].url; // Reemplaza con la URL de tus videos
    video.controls = true; // Agregar controles de reproducción

    // Agregar el video al div
    contenedorVideos.appendChild(video);
}*/