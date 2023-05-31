//Se llama al evento scroll
window.addEventListener('scroll', function () {

  //coloco constantes de tag con id o class
  const colorHeader = document.getElementById('headerS1');
  const colorLetras = document.querySelectorAll('.aColorS1');

  //Obtencion de la posicion
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    //cambia a color blanco el header
    colorHeader.classList.add('cambiar');

    //recorre cada clase encontrada y se cambia el color a negro
    for (let i = 0; i < colorLetras.length; i++) {
      colorLetras[i].classList.add('cambiar');
    }



  } else {

    // En el else se remove los valores agregados
    colorHeader.classList.remove('cambiar');
    for (let i = 0; i < colorLetras.length; i++) {
      colorLetras[i].classList.remove('cambiar');
    }


  }
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
