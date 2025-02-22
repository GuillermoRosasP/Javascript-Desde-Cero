

// Seleccionamos el formulario y le añadimos un evento para el submit
document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página

  // Obtenemos el valor del campo de texto
  const comentarioTexto = document.getElementById('comentario').value.trim();

  if (comentarioTexto === "") {
    alert("Por favor, escribe un comentario.");
    return;
  }

  // Creamos un nuevo párrafo para el comentario
  const p = document.createElement('p');
  p.textContent = comentarioTexto;

  // Agregamos el párrafo al contenedor de comentarios
  document.getElementById('comentarios').appendChild(p);

  // Limpiamos el campo de texto
  document.getElementById('comentario').value = "";
});





