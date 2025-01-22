

  // Capturar los elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Asegúrate de que el selector coincida con tu HTML

// Evento para agregar capítulos
button.addEventListener('click', function () {
  // Verificar si el input está vacío
  if (input.value.trim() === '') {
    alert('Please enter a valid chapter!');
    input.focus();
    return;
  }

  // Crear un nuevo elemento de lista
  const li = document.createElement('li');
  li.textContent = input.value;

  // Crear el botón para borrar
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';

  // Agregar el botón al elemento de lista
  li.append(deleteButton);

  // Agregar el elemento de lista a la lista
  list.append(li);

  // Evento para borrar el elemento
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
  });

  // Limpiar el input y devolver el foco
  input.value = '';
  input.focus();
});
