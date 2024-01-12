
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
        throw new Error(`Error de red: ${response.status}`);
        }

        data = await response.json();
        console.log("Información del usuario:", data);
        mostrarDatos(data);

    } catch (error) {
        console.log(error.message);
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
    const img = document.getElementById("imgavatar")
    const name = document.getElementById("name");
    const followers = document.getElementById("followers");
    const repos = document.getElementById("repos");
    const repos_link = document.getElementById("repos_link");
    const fecha = document.getElementById("fecha");
    img.src = data.avatar_url;
    name.textContent = "Name: " + data.login;
    followers.textContent = "Followers: " + data.followers;
    repos.textContent = "Repositorios publicos: " + data.public_repos
    repos_link.textContent = "Link: " + data.repos_url;
    fecha.textContent = "Fecha de creacion: " + data.created_at;
}
