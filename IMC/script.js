function calc() {
    let peso = document.getElementById("massa").value;
    let altura = document.getElementById("altura").value;
    const imc = peso / altura / altura;

    document.getElementById("seuIMC").textContent = "Seu IMC é " + imc.toFixed(2);
    if (18.5 <= imc && imc < 25) {
        document.getElementById("parametro").textContent = "Está normal";
    }else if (imc >= 25) {
        document.getElementById("parametro").textContent = "Está acima do peso";
    }
    else {
        document.getElementById("parametro").textContent = "Está acima do peso";
    }
}