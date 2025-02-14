/*juego de adivinar el numero y tambien muestra un mensaje de bienvenida los let son las variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
//while significa mientras no acerte se repite hasta que hacerte el numero
while (numeroUsuario != numeroSecreto) {
  //variable interactua con el cliente pidiendo un numero
  numeroUsuario = prompt("dame un numero por favor");
  console.log(numeroUsuario);
  //if significa si numerousuario es igual a numerosecreto//
  if (numeroUsuario == numeroSecreto) {
    alert(`acertaste el numero es: ${numeroUsuario} lo hiciste en ${intentos} ${palabraVeces}`);  //condicion verdadera
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");

      //alert('no acertaste')// no se cumple condicion
    }
    //incrementamos el contador cuando no acierta
intentos = intentos + 1;
 //apartir del segundo intento colocamos veces
 palabraVeces = 'veces';


  }
}*/









/*let mensajeDeBienvenida = 'Bienvenido a nuestro sitio web';
    alert (mensajeDeBienvenida); 
    si es maypr de eda puede sacar licencia si no no
    let nombre='lua';
    let edad=prompt('Dame tu edad por favor');
    if(edad>=18){
        alert('Puedes obtener la licencia');
    }else{
        alert('No puede obtener licencia')
    };
    /*let numeroDeVentas=50;
    let saldoDisponible=1000;

    let mensajeDeError='Error';

    alert(mensajeDeError);
    let noMbre = prompt('Dame tu nombre por favor');*/

/*pide numero y determina si es positivo negstivo o 0//
    const numero = prompt("Introduce un numero");

    if(numero > 0){
        alert("el numero es positivo");

    }else if(numero < 0){
        alert("el numero es negativo");
    }else{
        alert("el numero es 0");
    }*/
/*muestra si es fin de semana dese feliz fin o si es mitad de semana dese una buena semana 
    let diaSemana = prompt('Dime que dia es hoy').toLowerCase();
    console.log(diaSemana);
    if(diaSemana == "sabado"|| diaSemana =="domingo"){
        alert("Feliz fin de semana");
    }else{
        alert("Te deseo una excelente semana");
    }*/

/*de acuerdo a puntuacion da si gana o pierede
    let puntos=prompt('ingresa tus puntos');

    if(puntos>100){
        alert('has ganado');
    }else if(puntos<100){
        alert('Intentalo nuevamente');
    }*/

/*pide nombre y regresa bienvenida con su nombre
    alert('bienvenido ');
    let usuaRio = prompt('ingresa tu nombre');
    alert('bienvenido ' + usuaRio);

    //Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

    let numEros = 1;

    while(numEros<=10 ){
        console.log(numEros);
        numEros++;
    }
*/
/*Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número
    let numEros = 10;

    while(numEros<=10 ){
        console.log(numEros);
        numEros--;
        
    if(numEros==0){
        break;
    }
    }*/

    /*Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

    let numerMeta = parseInt(prompt("ingresa un numer por favor")
);
 //cerifica si es valido 
 if(!isNaN(numerMeta)&& numerMeta>=0){
    //mientras numerometa 9

    while(numerMeta>=0){
        console.log(numerMeta);
        numerMeta--;
    }
    }else{
        console.log("por favor , ingresa un numero valido o igual a 0");
 }*/
//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

// Pedir al usuario un número
let numero = parseInt(prompt("Ingresa un número para la cuenta progresiva:"));

// Verificar que el número es válido
if (!isNaN(numero) && numero >= 0) {
    let contador = 0; // Iniciar desde 0
    
    while (contador <= numero) {
        console.log(contador); // Mostrar el número en la consola
        contador++; // Incrementar el contador
    }
} else {
    console.log("Por favor, ingresa un número válido mayor o igual a 0.");
}
