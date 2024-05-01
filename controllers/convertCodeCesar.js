
//funcion de ejemplo 
function cifrar(frase, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    //Rotamos el alfabeto [clave] lugares a la derecha
    let cifrado  = alfabeto.slice(-clave);
    cifrado  += alfabeto.slice(0, alfabeto.length - clave);
    //Coge la letra del cifrado según la posición de cada letra
    //en alfabeto 
    for(let i=0; i< frase.length; i++){  
        letra = frase[i].toLowerCase();
        if(letra ==' '){
            letra =' ';
            }