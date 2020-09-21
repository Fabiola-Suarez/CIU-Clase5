var $id8 = document.querySelector("#fuente-8")
var $id16 = document.querySelector("#fuente-16")
var $id24 = document.querySelector("#fuente-24")

function cambiarDimensionFuente(size) {
 return function(){ document.body.style.fontSize = size + 'px';}
};

$id8.addEventListener("click", cambiarDimensionFuente(8));

$id16.addEventListener("click",cambiarDimensionFuente(16));

$id24.addEventListener("click",cambiarDimensionFuente(24))
    

