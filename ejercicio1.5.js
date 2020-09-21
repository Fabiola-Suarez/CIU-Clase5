function cambiarDimensionFuente(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}
var size8 = cambiarDimensionFuente(8);
var size16 = cambiarDimensionFuente(16);
var size24 = cambiarDimensionFuente(24);

function setClicks(){
    document.getElementById('fuente-8').onclick = size8;
    document.getElementById('fuente-16').onclick = size16;
    document.getElementById('fuente-24').onclick = size24;
}

/* Preguntas:

1) ¿En qué parte del código se genera un closure? ¿Por qué?

En la funcion cambiarDimensionFuentes. Para poder cambiar de forma practica las dimensiones de la fuente.

2) ¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?

En la funcion setClicks() : document.getElementById('fuente-8').onclick = size8;

3) Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas <script> … </script>.
 ¿Qué mensaje de error te muestra la consola de depuración? (Activa la consola si no la tienes activada) ¿Por qué aparece ese mensaje de error?

El mensaje que me muestra es que la funcion setClicks() no esta definida,
pero el programa funciona igual porque este cambio no influencio en nada en el script. 
Porque el HTML la esta llamando con onload y esta no esta en el script.

4) ¿Debemos escribir document.getElementById('fuente-8').onclick = size8; ó document.getElementById('fuente-8').onclick = size8(); ?¿Por qué?

Se deve escribir: document.getElementById('fuente-8').onclick = size8. Porque size8 es una variable y no una funcion.

5) Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para ello nos valemos de la función setClicks. 
¿Debemos escribir dentro de esta función size8; ó size8();? ¿Por qué?

Se deve escribir size 8() porque se convierte en función al asignarle una.

6) Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o innecesariamente consumiendo recursos del sistema que podrían ahorrarse. 
¿Qué ventajas le ves al uso de closures en este código? ¿Y qué inconvenientes?

Las ventajas son: Que no hay redundacia, es decir no se repite codigo innecesariamente y que es privado para esa función.

Los incomvenientes es que es una función que hace solo una accion y los closure es mejor que tengan varias acciones o retornos para reducir codigo,
o que las variables sean unicas de estos closures.*/ 