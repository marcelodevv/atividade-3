function calcularMedia() {
    // pegar os valores dos inputs
    let numero1 = parseFloat(document.getElementById("valor1").value);
    let numero2 = parseFloat(document.getElementById("valor2").value);

    // validar se os valores são números
    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById("resultado").innerText = "Por favor, digite números válidos.";
        return;
    }

    // calcular soma
    let soma = numero1 + numero2;

    // calcular média
    let media = soma / 2;

    // mostrar resultado
    document.getElementById("resultado").innerText = "A média é: " + media;
}