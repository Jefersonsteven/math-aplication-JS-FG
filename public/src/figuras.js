// Codigo del cuadrado

let lado = parseInt(prompt("Cuanto mide un lado de el cuadrado?"));
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

//Codigo del triangulo

let lado1Triangulo = parseInt(prompt("Cuanto mide el lado izquierdo del triangulo?"));
let lado2Triangulo = parseInt(prompt("Cuanto mide el lado derecho del triangulo?"));
let baseTriangulo = parseInt(prompt("Cuanto mide la base del triangulo?"));
let alturaTriangulo = parseInt(prompt("De cuanto es la altura del triangulo?"));
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Codigo del circulo

let radioCirculo = parseInt(prompt("Cuanto es el ratio del circulo?"));
const PI = Math.PI;
const diametroCirculo = (radio) => radio * 2;
const areaCirculo = (radio, pi) => (radio * radio) *pi;
const circunferencia = (diametro, pi) => diametro * pi