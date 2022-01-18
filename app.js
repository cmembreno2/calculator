//Seleccionar los elementos
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonDelete = document.getElementsByName("data-delete")[0];
const botonIgual = document.getElementsByName("data-igual")[0];
var result = document.getElementById("result");
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;


//Agregar los eventos
botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    });
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperation(boton.innerText);
    });
});

botonIgual.addEventListener('click',function(){
        calcular();
        actualizarDisplay();
});

botonDelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});

//Programar las funciones
function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value= opeActual;
}

function clear(){
    opeActual='';
    opeAnterior='';
    operacion = undefined;
}

function selectOperation(op){
    if(opeActual==='') return;
    if(opeAnterior!==''){
        calcular()
    }
    operacion=op.toString();
    opeAnterior=opeActual;
    opeActual='';
}

function calcular(){
    var calculo;
    const anterior =parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior)||isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior+actual;
            break;
        case '-':
            calculo = anterior-actual;
            break;
        case 'x':
            calculo = anterior*actual;
            break;
        case '/':
            calculo = anterior/actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior=''
}

