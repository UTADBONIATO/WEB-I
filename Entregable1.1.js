// Elementos base
var form = document.getElementById('todoForm');
var input = document.getElementById('todoInput');
var list  = document.getElementById('todoList');

// Agregar tarea
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var text = input.value.trim();
  if (!text) return;

  var li = document.createElement('li');

  var span = document.createElement('span');
  span.className = 'text';
  span.textContent = text;

  var actions = document.createElement('div');
  actions.className = 'actions';

  var btnComplete = document.createElement('button');
  btnComplete.className = 'complete';
  btnComplete.textContent = 'Completar';

  var btnDelete = document.createElement('button');
  btnDelete.className = 'delete';
  btnDelete.textContent = 'Eliminar';

  actions.appendChild(btnComplete);
  actions.appendChild(btnDelete);

  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);

  input.value = '';
  input.focus();
});

// Completar / Eliminar (delegación)
list.addEventListener('click', function (e) {
  var target = e.target;

  // completar
  if (target.classList.contains('complete')) {
    var li = target.closest('li');
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
      target.textContent = 'Completar';
    } else {
      li.classList.add('completed');
      target.textContent = 'Deshacer';
    }
  }

  // eliminar
  if (target.classList.contains('delete')) {
    var liDel = target.closest('li');
    if (liDel) liDel.remove();
  }
});
