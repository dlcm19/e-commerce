const btnCambiarColor = document.querySelector('#cambiar-color');

btnCambiarColor.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
  // btnCambiarColor.classList.toggle('active');
});