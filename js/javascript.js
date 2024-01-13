
var texto;
var data;

//----------------------------------------------------------------
// Llamada a la api
async function obtenerInformacionUsuario(usuario) {
    const username = usuario;  // Reemplaza con el nombre de usuario deseado
    const apiUrl = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error de red: Usuario no encontrado`);
        }

        data = await response.json();
        console.log("Información del usuario:", data);
        mostrarDatos(data);

    } catch (error) {
        alert(error.message);
    }
}

//Funcion obtener texto
function obtenerTexto() {
    var inputElement = document.getElementById("usuario");

    texto = inputElement.value;
    console.log(texto);

    inputElement.value = "";
    obtenerInformacionUsuario(texto);
}
function mostrarDatos(data){
    const plantilla = `
        <div class="avatar">
                            <img id="imgavatar" src="${data.avatar_url}" alt="">
        </div>
        <div class="datos">
                            <p id="name"><span>Name: </span> ${data.login}</p>
                            <p id="followers"><span>Followers: </span> ${data.followers}</p>
                            <p id="repos"><span>Repositorios publicos: </span> ${data.public_repos}</p>
                            <p id="repos_link"><span>Link: </span> ${data.repos_url}</p>
                            <p id="fecha"><span>Fecha de creacion: </span> ${data.created_at}</p>
        </div>
    `
    document.getElementsByClassName("informacion")[0].innerHTML = plantilla
}

//Evento enter
var input = document.getElementById("usuario");
input.addEventListener("keydown", function(event) {

    if (event.keyCode === 13) {
        texto = input.value;
        console.log(texto);
    
        input.value = "";
        obtenerInformacionUsuario(texto);
    }
});
