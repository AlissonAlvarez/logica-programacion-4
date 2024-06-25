function calcularFibonacci() {
    const inputElement = document.getElementById('numeroInput');
    const numero = Number(inputElement.value);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingrese un valor numérico válido mayor a cero");
        return;
    }

    const serie = generarFibonacci(numero);
    document.getElementById('resultado').textContent = serie.join(', ');
    console.log(serie.join(', '));
}

function generarFibonacci(cantidad) {
    let fibonacciArray = [0, 1];
    for (let i = 2; i < cantidad; i++) {
        fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
    }
    return fibonacciArray.slice(0, cantidad);
}
