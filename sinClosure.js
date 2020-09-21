
function cambiarDimensionFuente(size) {
  document.body.style.fontSize = size + 'px';
    
};

document.getElementById('fuente-8').onclick = cambiarDimensionFuente(8);
document.getElementById('fuente-16').onclick = cambiarDimensionFuente(16);
document.getElementById('fuente-24').onclick = cambiarDimensionFuente(24);

