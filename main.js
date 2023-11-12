const darkModeButton = document.getElementById('darkModeButton');
const lightModeCSS = document.getElementById('lightModeCSS');
const darkModeCSS = document.getElementById('darkModeCSS');

darkModeButton.addEventListener('click', () => {
  if (darkModeButton.dataset.mode === 'dark') {
    lightModeCSS.disabled = false;
    darkModeCSS.disabled = true;
    darkModeButton.dataset.mode = 'light';
    darkModeButton.textContent = 'Cambiar a Modo Claro';
  } else {
    lightModeCSS.disabled = true;
    darkModeCSS.disabled = false;
    darkModeButton.dataset.mode = 'dark';
    darkModeButton.textContent = 'Cambiar a Modo Oscuro';
  }
});