function mostrarInformacion(semana) {
    const segunda = document.getElementById('contenedorApuntes');
    segunda.style.display = "flex";

    // Obtener el JSON utilizando fetch
    fetch('data/datos.json')
      .then(response => response.json())
      .then(data => {
        // Obtener el objeto de la semana seleccionada
        const clase = data.clases[semana];

        // Mostrar la información en el DOM
        document.getElementById('semanaTema').textContent = `${clase.semana} - ${clase.tema}`;
        document.getElementById('definicion').textContent = clase.definicion;
        document.getElementById('procedimientos').textContent = clase.procedimientos;
        document.getElementById('resultado').textContent = clase.resultado;
        document.getElementById('proyecto').textContent = clase.proyecto;
        document.getElementById('verProyecto').href = clase.url;
        
      })
      .catch(error => console.error('Error:', error));
  }