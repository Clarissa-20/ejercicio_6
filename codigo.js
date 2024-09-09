// Solicitar al usuario un número mayor que 100
let num;
do {
    num = parseFloat(prompt("Ingrese un número mayor que 100:"));
} while (num <= 100);

// Mostrar el resultado en el elemento con id 'resultado'
document.getElementById('resultado').textContent = `Número ingresado mayor que 100: ${num}`;

