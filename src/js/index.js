function converter() {
    var real = document.getElementById("getReal").value;
    var dollar = 5.05

    var convertido = dollar * real
    convertido = convertido.toFixed(2)

    if (!real || real == null || real <= 0) {
        return document.getElementById("resultado").innerHTML = `<span class="error"><b>Você precisa inserir um número válido maior que 0!</b></span>`;
    }

    document.getElementById("resultado").innerHTML = `<h3>Real: <span class="sucess">R$${convertido.replace(".", ",")}</span></h3>`;
}