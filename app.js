// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// array para almacenar los nombres
let amigos = [];

  //Implementa una función para agregar amigos
function agregarAmigos(){
    const input = document.getElementById("inputAmigo") 
    const nombre = input.value.trim(); 

    //validar la entrada
    if (!nombre) {
        alert("Por favor, ingresa un nombre.");  
      } else if (/\d/.test(nombre)) {
        alert("No se permiten números en los nombres.");
      } else {
         
        input.focus(); 
        amigos.push(nombre); 
        
      }
      // Limpiar el input 
      input.value = ""; 
      actualizarLista();

  }



//actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    // Iterar sobre el arreglo, recorrer el arreglo amigos 
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li);
    }
}


// función para sortear los amigos

function sortearAmigo() {
 
    if (amigos.length === 0){
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceAleatorio]; 

    // Mostrar el resultado
    const resultado = document.getElementById("resultado"); 
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`; 
}