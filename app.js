
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento,texto){

let elementoHtml = document.querySelector(elemento);
elementoHtml.innerHTML = texto;
return;
}

function verificarIntento(){
let nueroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if (nueroDeUsuario===numeroSecreto){

    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1) ? 'Vez' : 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

}else{

    if(nueroDeUsuario > numeroSecreto){
     asignarTextoElemento('p','El Numero secreto es menor');
    }else{
     asignarTextoElemento('p','El numero secreto es mayor');  
    }
intentos++;
limpiarCaja();
}

return;

}

function limpiarCaja(){

 document.querySelector('#valorUsuario').value = '';
}

function condiconesDeJuego(){

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Ingrese un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}

function generarNumeroSecreto() {

let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if(listaNumerosSorteados.length == numeroMaximo){ 

asignarTextoElemento('p','Ya se utilizaron todos los numeros posibles');

} 

else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
        
        return generarNumeroSecreto();

        }else{

            listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;



        }

    }
    
}

function reiniciarJuego(){

    limpiarCaja();
    condiconesDeJuego();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condiconesDeJuego();








  