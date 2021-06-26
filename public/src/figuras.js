// Codigo del cuadrado


function perimetroCuadrado (lado) {
    return lado * 4
}

function areaCuadrado (lado) {
    return lado * lado
}

// Codigo del triangulo

console.group("Triangulos");
const lado1Triangulo = 6;
const lado2Triangulo = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`El lado lateral 1 del triangulo mide: ${lado1Triangulo}cm`);
console.log(`El lado lateral 2 del triangulo mide: ${lado2Triangulo}cm`);
console.log(`La base del triangulo mide: ${baseTriangulo}cm`);
console.log(`La altura del triangulo mide: ${alturaTriangulo}cm`);

const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
console.log(`El perimetro del triangulo mide: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo mide: ${areaTriangulo}cm`);
console.groupEnd();

// Codigo del circulo

console.group("Circulos");
const radioCirculo = 5;
const PI = Math.PI;
console.log(`El radio del circulo mide: ${radioCirculo}cm`);
console.log(`PI es: ${PI}`);
const diametroCirculo = radioCirculo * 2;
const areaCirculo = (radioCirculo * radioCirculo) * PI;
const circunferencia = diametroCirculo * PI
console.log(`El diametro del circulo mide: ${diametroCirculo}cm`);
console.log(`El area del circulo mide: ${areaCirculo}cm2`);
console.log(`La circunferencia del circulo mide: ${circunferencia}cm`);
console.groupEnd();