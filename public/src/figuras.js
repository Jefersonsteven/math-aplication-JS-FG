// Codigo del cuadrado

const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado * lado;

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputSquares");
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado(value);
    const displaySquares = document.getElementById("displaySquares");
    displaySquares.textContent = perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputSquares");
    const value = parseInt(input.value);

    const area = areaCuadrado(value);
    const displaySquares = document.getElementById("displaySquares");
    displaySquares.textContent = area;
}

//Codigo del triangulo

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangle1");
    const input2 = document.getElementById("inputTriangle2");
    const input3 = document.getElementById("inputTriangle3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    const displayTriangle = document.getElementById("displayTriangle");
    displayTriangle.textContent = perimetro;
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTriangle3");
    const input4 = document.getElementById("inputTriangle4");
    const value3 = parseInt(input3.value);
    const value4 = parseInt(input4.value);

    const area = areaTriangulo(value3, value4);
    const displayTriangle = document.getElementById("displayTriangle");
    displayTriangle.textContent = area;
}


// Codigo del circulo

const PI = Math.PI;
const areaCirculo = (radio, pi) => (radio * radio) *pi;
const diametroCirculo = (radio) => radio * 2;
const circunferencia = (diametro, pi) => diametro * pi;

function calcularAreaCirculo() {
    const input = document.getElementById("inputCircles");
    const value = input.value;

    const area = areaCirculo(value, PI);
    const displayCircle = document.getElementById("displayCircle");
    displayCircle.textContent = area;
}

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCircles");
    const value = input.value;

    const diametro = diametroCirculo(value);
    const displayCircle = document.getElementById("displayCircle");
    displayCircle.textContent = diametro;
}

function calcularCircunferencia() {
    const input = document.getElementById("inputCircles");
    const value = input.value;

    const diametro = diametroCirculo(value);
    const circunferenciaCirculo = circunferencia(diametro, PI);
    const displayCircle = document.getElementById("displayCircle");
    displayCircle.textContent = circunferenciaCirculo;
}