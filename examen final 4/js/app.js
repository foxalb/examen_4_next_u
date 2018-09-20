var resultado=0;
var pantalla_string="";
var pantalla_numero=0;
var operacion="";
var numero1=0;
var numero2=0;

function contar_caracteres(cadena){   //cuanta la cantidad de caracteres numericos que hay en la pantalla de la calculadora
var cuantos=0;
var i;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i)!="-" && cadena.charAt(i)!=".") {
        cuantos+=1;
    }
  }
  return cuantos;
}

function agregar_punto(cadena){
var cuantos=0;
var i;
  for (var i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i)==".") {
        cuantos=1;
    }
  }
  if (cuantos==0){
    pantalla_string += ".";
    pantalla_numero=Number(pantalla_string);
  }
  display.innerHTML=pantalla_string;
}


function asignar_operacion_a_realizar(simbolo){ //determinar la operacion a realizar
switch (simbolo) {
  case "dividido":
    if (operacion=="") {
      operacion="dividido";
      numero1=pantalla_numero;
      resultado=0;
      pantalla_string="";
      pantalla_numero=0;
      display.innerHTML="";
    }else {
      operacion="dividido";
    }
    break;
  case "por":
    if (operacion=="") {
      operacion="por";
      numero1=pantalla_numero;
      resultado=0;
      pantalla_string="";
      pantalla_numero=0;
      display.innerHTML="";
    }else {
      operacion="por";
    }
    break;
  case "menos":
    if (operacion=="") {
      operacion="menos";
      numero1=pantalla_numero;
      resultado=0;
      pantalla_string="";
      pantalla_numero=0;
      display.innerHTML="";
    }else {
      operacion="menos";
    }
    break;
  case "mas":
    if (operacion=="") {
      operacion="mas";
      numero1=pantalla_numero;
      resultado=0;
      pantalla_string="";
      pantalla_numero=0;
      display.innerHTML="";
    }else {
      operacion="mas";
    }
    break;
  default:
    break;
}
}



function ejecutar_operacion(){
switch (operacion) {
    case "mas":
      resultado=numero1+pantalla_numero;
      pantalla_string = resultado.toString();
      pantalla_numero=resultado;
      if (contar_caracteres(resultado.toString())>8) {
        resultado=resultado.toPrecision(6);
      }
      display.innerHTML=resultado;
      operacion="";
      break;
    case "menos":
      resultado=numero1-pantalla_numero;
      pantalla_string = resultado.toString();
      pantalla_numero=resultado;
      if (contar_caracteres(resultado.toString())>8) {
        resultado=resultado.toPrecision(6);
      }
      display.innerHTML=resultado;
      operacion="";
      break;
    case "por":
      resultado=numero1*pantalla_numero;
      pantalla_string = resultado.toString();
      pantalla_numero=resultado;
      if (contar_caracteres(resultado.toString())>8) {
        resultado=resultado.toPrecision(6);
      }
      display.innerHTML=resultado;
      operacion="";
      break;
    case "dividido":
      if (pantalla_numero==0) {
          alert("Error - division entre cero");
          break;
      }
      resultado=numero1/pantalla_numero;
      pantalla_string = resultado.toString();
      pantalla_numero=resultado;
      if (contar_caracteres(resultado.toString())>=8) {
        resultado=resultado.toPrecision(6);
      }
      display.innerHTML=resultado;
      operacion="";
      break;
  default:
    break;
}
}


function tecla_numerica(display,numero){  //cuando se presiona una tecla numerica
  if (contar_caracteres(pantalla_string)<8){
    if (display.innerHTML=="0") {
      pantalla_string=numero.toString();
      pantalla_numero=numero;
    }else {
      pantalla_string += numero.toString();
      pantalla_numero=Number(pantalla_string);
    }
  }
  display.innerHTML=pantalla_string;
}


function botones_arriba_normal(elemento){ //regresa los botones de arriba a su tamaño normal
  elemento.style.width = "22%";
  elemento.style.height = "62.91px";
}

function botones_abajo_normal(elemento){ //regresa los botones de abajo a su tamaño normal
  elemento.style.width = "29%";
  elemento.style.height = "62.91px";
}

function ejecutar_accion_con_boton(elemento){ //que realiza cada boton al hacerle click
var display=document.getElementById("display");

  switch (elemento.id) {
    case "mas":
      elemento.style.width = "90%";
      elemento.style.height = "100%";
      asignar_operacion_a_realizar(elemento.id)
      break;
    case "on": //coloca todo en cero
      botones_arriba_normal(elemento)
      resultado=0;
      pantalla_string="";
      pantalla_numero=0;
      operacion="";
      display.innerHTML="0";
      break;
    case "sign":   //cambia de signo
      botones_arriba_normal(elemento)
      if (pantalla_numero!=0) {
        pantalla_numero=pantalla_numero*(-1);
        pantalla_string=pantalla_numero.toString();
        resultado=pantalla_numero;
        display.innerHTML=pantalla_string;
      }
      break;
    case "raiz":  //todavia no funciona
      botones_arriba_normal(elemento)
      alert("por ahora no");
      break;
    case "dividido": //prepara para dividir
      botones_arriba_normal(elemento)
      asignar_operacion_a_realizar(elemento.id)
      break;
    case "7":
      botones_arriba_normal(elemento)
      tecla_numerica(display,7)
      break;
    case "8":
      botones_arriba_normal(elemento)
      tecla_numerica(display,8)
      break;
    case "9":
      botones_arriba_normal(elemento)
      tecla_numerica(display,9)
      break;
    case "por":
      botones_arriba_normal(elemento)
      asignar_operacion_a_realizar(elemento.id)
      break;
    case "4":
      botones_arriba_normal(elemento)
      tecla_numerica(display,4)
      break;
    case "5":
      botones_arriba_normal(elemento)
      tecla_numerica(display,5)
      break;
    case "6":
      botones_arriba_normal(elemento)
      tecla_numerica(display,6)
      break;
    case "menos":
      botones_arriba_normal(elemento)
      asignar_operacion_a_realizar(elemento.id)
      break;
    case "0":
      botones_abajo_normal(elemento)
      tecla_numerica(display,0)
      break;
    case "punto":
      botones_abajo_normal(elemento)
      agregar_punto(pantalla_string)
      break;
    case "igual":
      botones_abajo_normal(elemento)
      ejecutar_operacion()
      break;
    case "1":
      botones_abajo_normal(elemento)
      tecla_numerica(display,1)
      break;
    case "2":
      botones_abajo_normal(elemento)
      tecla_numerica(display,2)
      break;
    case "3":
      botones_abajo_normal(elemento)
      tecla_numerica(display,3)
      break;
    default:
      break;
  }
}

function cambiar_tamaño_de_boton(elemento){ //para cambiar el tamaño al presionar
switch (elemento.id) {
  case "mas":
    elemento.style.width = "88%";
    elemento.style.height = "98%";
    break;
  case "0":
  case "punto":
  case "igual":
  case "1":
  case "2":
  case "3":
    elemento.style.width = "28%";
    elemento.style.height = "60px";
    break;
  default:
    elemento.style.width = "21%";
    elemento.style.height = "60px";
  break;
}
}


var Calculadora = {
  init: function(){
    this.asignar_evento_a_botones('tecla');
  },
  asignar_evento_a_botones: function(selector){
    var botones_calculadora = document.getElementsByClassName(selector);
    for (var i = 0; i < botones_calculadora.length; i++) {
      botones_calculadora[i].onclick = this.evento_al_soltar_boton; //accion cuando suelta el boton
      botones_calculadora[i].onmousedown = this.cambiar_tamano_al_presionar; //al mantener presionado con el raton
    }
  },
  evento_al_soltar_boton: function(event){
    ejecutar_accion_con_boton(event.target); //suma-resta-multiplicar-dividir-colocar numero a la pantalla
  },
  cambiar_tamano_al_presionar: function(event){
     cambiar_tamaño_de_boton(event.target); //suma-resta-multiplicar-dividir-colocar numero a la pantalla
  },
}

Calculadora.init();
