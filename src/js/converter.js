async function converter() {
    var dolar = document.getElementById("getValor").value;
    
    document.getElementById("resultado").style.display = "block";


    if (!dolar || dolar <= 0) {
        document.getElementById("resultado").innerHTML = `<span class="error"><b>Você precisa inserir um número válido maior que 0!</b></span>`;
        return;
    }

    try {
        let response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL"); 
        let data = await response.json();
        let cotacao = parseFloat(data.USDBRL.bid);

        var convertido = (dolar * cotacao).toFixed(2);

        document.getElementById("resultado").innerHTML = `<h3>Valor em reais: <span class="sucess">R$${convertido.replace(".", ",")}</span></h3>`;
    } catch (error) {
        document.getElementById("resultado").innerHTML = `<span class="error"><b>Erro ao buscar cotação. Tente novamente mais tarde.</b></span>`;
    }
}