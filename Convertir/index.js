const Minuscula = document.querySelector('#nombreBoton1');
const Mayuscula = document.querySelector('#nombreBoton2');
const Convertidor = document.querySelector('#nombreBoton3');
const Pantalla = document.querySelector('#Pantalla');
const Input = document.querySelector('.Text');

Minuscula.addEventListener('click', () => {
    Pantalla.innerHTML = Input.value.toLowerCase();
});

Mayuscula.addEventListener('click', () => {
   Pantalla.innerHTML = Input.value.toUpperCase();
});

Convertidor.addEventListener('click', () => {
    Pantalla.innerHTML = Input.value.length;
});


