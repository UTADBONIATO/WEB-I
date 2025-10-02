var btn  = document.getElementById('btnLoad');
var list = document.getElementById('apiList');

btn.addEventListener('click', function () {
  btn.disabled = true;
  btn.textContent = 'Descargando…';

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      // Limpiar resultados anteriores
      list.innerHTML = '';

      // Tomar solo los 10 primeros
      var limite = 10;
      var i;
      for (i = 0; i < data.length && i < limite; i++) {
        var item = data[i];

        var li = document.createElement('li');
        li.textContent = item.title; // solo el título
        list.appendChild(li);
      }
    })
    .catch(function (err) {
      alert('Error descargando datos: ' + err);
    })
    .finally(function () {
      btn.disabled = false;
      btn.textContent = 'Descargar';
    });
});
